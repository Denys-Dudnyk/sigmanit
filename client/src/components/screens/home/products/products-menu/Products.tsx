import { FC } from 'react'

import styles from '../Products.module.scss'

import { IMenu } from '../interface/product.interface'
import ProductItem from '../ProductItem/ProductItem'
import SectionContainer from '@/components/ui/section/SectionContainer'

const Products: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<SectionContainer id='products' className={styles.products}>
			<div className={styles.title}>
				<h1>{title}</h1>
			</div>
			<div className={styles.containerProducts}>
				{items.map(item => (
					<ProductItem item={item} key={item.link} />
				))}
			</div>
		</SectionContainer>
	)
}
export default Products
