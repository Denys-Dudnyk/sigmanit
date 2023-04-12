/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
		PUBLIC_RECAPTCHA_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_KEY,
		RECAPTCHA_SECRET_KEY: process.env.REACT_RECAPTCHA_SECRET_KEY,

		MAIL_PASSWORD: process.env.REACT_MAIL_PASSWORD,
		MAIL_USER: process.env.REACT_MAIL_USER,
		MAIL_PUBLIC: process.env.REACT_MAIL_PUBLIC,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				// destination: 'https://cinema-api-production.up.railway.app/:path*',
				destination: 'http://localhost:4200/api/:path*',
				// destination: 'http://45.132.240.237/api/:path*',
			},
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:4200/uploads/:path*',
				// destination: 'http://45.132.240.237/uploads/:path*',

				// destination:'https://cinema-api-production.up.railway.app/uploads/:path*',
			},
		]
	},
	swcMinify: true,

	images: {
		domains: ['firebasestorage.googleapis.com'],
	},
}

module.exports = nextConfig
