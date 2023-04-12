import { FC } from 'react'

import Footer from '@/components/layout/footer/Footer'
import Meta from '@/shared/meta/Meta'

import ProductContainer from './products/ProductContainer'
import About from './about-us/About'
import Contacts from './contacts/Contacts'
import HomeSection from './home-section/HomeSection'

const Home: FC = () => {
	return (
		<Meta title='Home' description='Welcome to my personal developer website!'>
			<HomeSection />
			<About />
			<ProductContainer />
			<Contacts />
			<Footer />
		</Meta>
	)
}
export default Home
