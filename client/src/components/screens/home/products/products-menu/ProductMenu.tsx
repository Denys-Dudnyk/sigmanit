import { FC } from 'react'

import Products from './Products'
import { useProductsHome } from '../useProducts'

const ProductMenu: FC = () => {
	const { data } = useProductsHome()

	return <Products menu={{ title: 'Our Products', items: data || [] }} />
}
export default ProductMenu
