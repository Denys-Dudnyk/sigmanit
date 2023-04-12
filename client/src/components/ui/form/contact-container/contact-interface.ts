import { Control, FormState, UseFormRegister } from 'react-hook-form'
import { IProduct } from '@/shared/types/product.types'
export interface IContactState {
	register: UseFormRegister<any>
	formState: FormState<IContactData>
}

export interface IContactData {
	email: string
	name: string
	// subject: string
	message: string
	product: string
}
export interface IMovieEditInput extends Omit<IProduct, '_id'> {}
