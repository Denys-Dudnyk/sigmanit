import { prop } from '@typegoose/typegoose'

import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

export interface ProductModel extends Base {}

export class ProductModel extends TimeStamps {
	@prop()
	title: string

	@prop({ unique: true })
	slug: string

	@prop()
	description: string

	@prop()
	image: string
}
