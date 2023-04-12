import { useMutation } from 'react-query'

import { fetchPostHelper } from '@/helpers/fetch.helper'
import { SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { IContactData } from './contact-container/contact-interface'

export const useFormPost = (reset: () => void) => {
	const { executeRecaptcha } = useGoogleReCaptcha()

	const { mutateAsync } = useMutation(['send email'], (data: IContactData) =>
		toast.promise(
			fetchPostHelper({
				path: 'contact',
				data: data,
				executeRecaptcha: executeRecaptcha,
			}),
			{
				pending: 'Email is pending',
				success: 'Successfully sent 👌',
				error: 'Something went wrong 🤯',
			}
		)
	)
	const onSubmit: SubmitHandler<IContactData> = async data => {
		await mutateAsync(data)
		reset()
	}

	return { onSubmit }
}
