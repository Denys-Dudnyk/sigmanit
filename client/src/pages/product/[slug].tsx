import SingleProductPage from '@/components/ui/single-product/SingleProductPage'
import { ProductService } from '@/services/product.service'
import { IProduct } from '@/shared/types/product.types'

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Error404 from '../404'

interface IProductPage {
	product: IProduct
}

const ProductPage: NextPage<IProductPage> = ({ product }) => {
	return product ? <SingleProductPage product={product} /> : <Error404 />
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: product } = await ProductService.getBySlug(
			String(params?.slug)
		)

		return {
			props: {
				product,
			},

			revalidate: 10,
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: products } = await ProductService.getAll()
		const paths = products.map(p => ({
			params: { slug: p.slug },
		}))

		return { paths, fallback: 'blocking' }
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export default ProductPage
