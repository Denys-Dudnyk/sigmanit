import Products from '@/components/screens/home/products/products-menu/Products'
import { IProduct } from '@/shared/types/product.types'
import { GetStaticProps, NextPage } from 'next'
import Error404 from './404'
import {
	IMenu,
	IMenuItem,
} from '@/components/screens/home/products/interface/product.interface'
import { ProductService } from '@/services/product.service'
import { useProducts } from '@/components/screens/home/products/useProducts'
import Footer from '@/components/layout/footer/Footer'

const ProductsPage: NextPage = () => {
	const { data } = useProducts()
	return (
		<>
			<Products menu={{ title: 'Our Products', items: data || [] }} />
			<Footer />
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: products } = await ProductService.getAll()

		return {
			props: {
				products,
			},
			revalidate: 10,
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export default ProductsPage
