import Layout from '@/components/layout/Layout'
import { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import HeadProvider from './HeadProvider'
import { FC } from 'react'
import ReduxToast from './ReduxToast'
// import 'react-toastify/dist/ReactToastify.min.css'
// import { ToastContainer } from 'react-toastify'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		// <HeadProvider>
		<GoogleReCaptchaProvider
			reCaptchaKey={`${process.env.PUBLIC_RECAPTCHA_KEY}`}
			scriptProps={{
				defer: true,
				appendTo: 'body',
				nonce: undefined,
			}}
		>
			<QueryClientProvider client={queryClient}>
				<Layout>
					{children}
					<ToastContainer />
				</Layout>
			</QueryClientProvider>
		</GoogleReCaptchaProvider>
		// </HeadProvider>
	)
}

export default MainProvider
