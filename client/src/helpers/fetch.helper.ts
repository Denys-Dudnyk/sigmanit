import { IFetchPost } from '@/shared/types/post-fetch-types'

export const fetchHelper = async <T>(path: string) => {
	const res = await fetch(`http://localhost:3000/api/${path}`)
	return (await res.json()) as T
}

export const fetchPostHelper = async ({
	path,
	data,
	executeRecaptcha,
}: IFetchPost) => {
	if (!executeRecaptcha) return

	try {
		const token = await executeRecaptcha()
		if (!token) return

		await fetch(`http://localhost:3000/api/${path}`, {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				token,
				name: data.name,
				email: data.email,
				message: data.message,
			}),
		})
	} catch (err) {
		console.error(err)
	}
}
