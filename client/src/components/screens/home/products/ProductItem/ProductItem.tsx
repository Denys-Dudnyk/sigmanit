import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { IMenuItem } from '../interface/product.interface'

import styles from '../Products.module.scss'

const ProductItem: FC<{ item: IMenuItem }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<div className={styles.image}>
				<Link href={item.link}>
					<Image
						alt={item.title}
						src={item.icon}
						width={240}
						height={225}
						draggable={false}
						priority
					/>
				</Link>
			</div>
			<h1>{item.title}</h1>
			<Link href={item.link} about={item.title}>
				<button>Get more info</button>
			</Link>
		</div>
	)
}
export default ProductItem
