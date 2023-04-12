import { useQuery } from 'react-query'

import { ProductService } from '@/services/product.service'

import { getProductUrl } from '@/config/url.config'
import { IMenuItem } from './interface/product.interface'

// import { IMenuItem } from './../menu.interface'

export const useProductsHome = () => {
	const queryData = useQuery(['product home'], () => ProductService.getAll(), {
		select: ({ data }) =>
			data
				.filter(product => product.image)
				.map(
					product =>
						({
							icon: product.image,
							link: getProductUrl(product.slug),
							title: product.title,
							description: product.description,
						} as IMenuItem)
				)
				.slice(0, 4),
	})

	return queryData
}

export const useProducts = () => {
	const queryData = useQuery(
		['product container menu'],
		() => ProductService.getAll(),
		{
			select: ({ data }) =>
				data
					.filter(product => product.image)
					.map(
						product =>
							({
								icon: product.image,
								link: getProductUrl(product.slug),
								title: product.title,
								description: product.description,
							} as IMenuItem)
					),
		}
	)

	return queryData
}
