import { FC } from 'react'
import styles from './Form.module.scss'
import Button from '../button/Button'
import Link from 'next/link'
import { useFormPost } from './useForm'
import { IContactData } from './contact-container/contact-interface'
import { Controller, useForm } from 'react-hook-form'
import ContactContainer from './contact-container/ContactContainer'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const DynamicSelect = dynamic(() => import('@/components/ui/select/Select'), {
	ssr: false,
})

const Form: FC = () => {
	const { reset, formState, handleSubmit, register, control } =
		useForm<IContactData>({
			mode: 'onChange',
		})

	const { onSubmit } = useFormPost(reset)

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [product, setProduct] = useState('')
	const [subject, setSubject] = useState('')

	// const handleSubmit = async event => {
	// 	event.preventDefault()

	// 	try {
	// 		const response = await fetch('/api/sendMail', {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 			body: JSON.stringify({ name, email, message, subject, product }),
	// 		})

	// 		const data = await response.json()

	// 		console.log(data.message)
	// 	} catch (error) {
	// 		console.error(error)
	// 	}
	// }
	// const options = [
	// 	{ value: 'chocolate', label: 'Chocolate' },
	// 	{ value: 'strawberry', label: 'Strawberry' },
	// 	{ value: 'vanilla', label: 'Vanilla' },
	// ]
	return (
		// <form onSubmit={handleSubmit}>
		// 	<input
		// 		type='text'
		// 		placeholder='Your name'
		// 		value={name}
		// 		onChange={event => setName(event.target.value)}
		// 	/>
		// 	<Controller
		// 		control={control}
		// 		name='product'
		// 		render={({ field, fieldState: { error } }) => (
		// 			<DynamicSelect
		// 				field={field}
		// 				options={options}
		// 				isMulti
		// 				placeholder='Products'
		// 				error={error?.message}
		// 				onChange={event => setProduct(event.target.value)}
		// 			/>
		// 		)}
		// 		rules={{
		// 			required: 'Please select at least one product!',
		// 		}}
		// 	/>
		// 	<input
		// 		type='email'
		// 		placeholder='Your email'
		// 		value={email}
		// 		onChange={event => setEmail(event.target.value)}
		// 	/>
		// 	<input
		// 		type='text'
		// 		placeholder='Your Subject'
		// 		value={subject}
		// 		onChange={event => setSubject(event.target.value)}
		// 	/>
		// 	<textarea
		// 		placeholder='Your message'
		// 		value={message}
		// 		onChange={event => setMessage(event.target.value)}
		// 	></textarea>
		// 	<button type='submit'>Send message</button>
		// </form>

		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<ContactContainer register={register} formState={formState} />
			<Button className={styles.formButton}>Send</Button>
			<p>
				This site is protected by reCAPTCHA and the
				<Link
					href='https://policies.google.com/privacy'
					target='_blank'
					rel='noreferrer noopener'
				>
					Google Privacy Policy
				</Link>
				and
				<Link
					href='https://policies.google.com/terms'
					target='_blank'
					rel='noreferrer noopener'
				>
					Terms of Service
				</Link>
				apply.
			</p>
		</form>
	)
}
export default Form
