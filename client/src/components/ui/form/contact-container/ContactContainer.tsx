import { validateEmail } from '@/shared/validateEmail'
import {
	IContactState,
	IContactData,
	IMovieEditInput,
} from './contact-interface'
import Field from '../field/Field'
import dynamic from 'next/dynamic'
import { Controller, useForm } from 'react-hook-form'
import { useProducts } from './useProducts'

const DynamicSelect = dynamic(() => import('@/components/ui/select/Select'), {
	ssr: false,
})

export default function ContactContainer({
	register,
	formState: { errors },
}: IContactState) {
	const { data: product } = useProducts()

	const { control } = useForm<IMovieEditInput>({
		mode: 'onChange',
	})

	const options = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' },
	]

	return (
		<>
			<Field
				{...register('name', {
					required: 'Your name is required',
				})}
				placeholder='Your name'
				type='text'
				error={errors.name?.message}
			/>
			<Field
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validateEmail,
						message: 'Enter valid e-mail',
					},
				})}
				placeholder='e-mail'
				type='email'
				error={errors.email?.message}
			/>

			{/* <Controller
				control={control}
				name='title'
				render={({ field, fieldState: { error } }) => (
					<DynamicSelect
						field={field}
						options={product || []}
						isMulti
						placeholder='Products'
						error={error?.message}
					/>
				)}
				rules={{
					required: 'Please select at least one product!',
				}}
			/> */}

			{/* <Field
				{...register('subject', {
					required: 'Subject is required',
				})}
				placeholder='Subject'
				type='text'
				error={errors.subject?.message}
			/> */}

			<Field
				{...register('message', {
					required: 'Message is required',
				})}
				placeholder='Your message'
				type='text'
				error={errors.message?.message}
			/>
		</>
	)
}
