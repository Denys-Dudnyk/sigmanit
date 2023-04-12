import nodemailer from 'nodemailer'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function sendMail(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { name, email, message, subject, product } = req.body

	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: 'sigmanit.ee@gmail.com',
			pass: 'glaeeefdglxfbntq',
		},
	})

	try {
		await transporter.sendMail({
			from: email,
			to: 'sigmanit.ee@gmail.com',
			// subject: `New message from ${name}`,

			subject: `Message From ${name}`,
			html: `<div>
			<p>Message: ${message}</p>
			<p>Sender: ${req.body.email}</p>
			<p>subject: ${subject}</p>
			<p>product: ${product}</p>

</div>`,
		})

		res.status(200).json({ message: 'Email sent successfully' })
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Error sending email' })
	}
}
