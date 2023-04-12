import { PropsWithChildren } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { IMeta } from './meta.interface'
import { titleMerge } from '@/helpers/titleMerge.helper'

export default function Meta({
	children,
	title,
	description,
}: PropsWithChildren<IMeta>) {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<>
			<Head>
				<title itemProp='headline'>{titleMerge(title)}</title>

				<>
					<meta
						itemProp='description'
						name='description'
						content={description}
					/>

					<link rel='canonical' href={currentUrl} />
					<meta name='og:title' content={titleMerge(title)} />
					<meta name='og:url' content={currentUrl} />
					<meta name='og:site_name' content='Sigmanit OÜ' />
					<meta name='og:description' content={description} />
				</>
			</Head>
			{children}
		</>
	)
}
