import { useQuery } from 'react-query'

import { IOption } from '../../../ui/select/select.interface'
import { ProductService } from '@/services/product.service'

export const useProducts = () => {
	const queryData = useQuery(
		['List of products'],
		() => ProductService.getAll(),
		{
			select: ({ data }) =>
				data.map(
					(product): IOption => ({
						label: product.title,
						value: product.title,
					})
				),
			onError: error => {
				//toastError(error, 'Genre list')
				error
			},
		}
	)

	return queryData
}
