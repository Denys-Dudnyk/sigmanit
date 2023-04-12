import { FC } from 'react'
import ProductMenu from './products-menu/ProductMenu'
import Link from 'next/link'
import styles from './Products.module.scss'
const ProductContainer: FC = () => {
	return (
		<>
			<ProductMenu />
			<div className='mb-44 flex flex-col justify-center items-center '>
				<Link href={'/products'} className={styles.button}>
					All products
				</Link>
			</div>
		</>
	)
}
export default ProductContainer
