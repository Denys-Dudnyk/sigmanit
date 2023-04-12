import { axiosClassic, instance } from '@/api/interceptors'
import { getProductsUrl } from '@/config/api.config'
import { IProduct } from './../shared/types/product.types'

export interface IProductEditInput extends Omit<IProduct, '_id'> {}

export const ProductService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IProduct[]>(getProductsUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async getBySlug(slug: string) {
		return axiosClassic.get<IProduct>(getProductsUrl(`/by-slug/${slug}`))
	},

	async getById(_id: string) {
		return instance.get<IProductEditInput>(getProductsUrl(`/${_id}`))
	},
}
