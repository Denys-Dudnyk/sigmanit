import Meta from '@/shared/meta/Meta'

export default function Error404() {
	return (
		<Meta title='Page not found'>
			<div className='flex justify-center items-center relative  h-screen'>
				<h1 className=' text-center  text-4xl font-semibold text-violet text-shadow'>
					404 - Page not found
				</h1>
			</div>
		</Meta>
	)
}
