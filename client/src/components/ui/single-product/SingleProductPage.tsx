import { IProduct } from '@/shared/types/product.types'
import Image from 'next/image'
import { FC } from 'react'
import styles from './SingleProductPage.module.scss'
import parse from 'html-react-parser'
import Footer from '@/components/layout/footer/Footer'
import { FcCheckmark } from 'react-icons/fc'
import Meta from '@/shared/meta/Meta'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

interface IProductSinglePage {
	product: IProduct
}

export const SingleProductPage: FC<IProductSinglePage> = ({ product }) => {
	return (
		<Meta
			title={product.title}
			description={`You can buy ${product.title} from Sigmanit OÜ from the warehouse at low price. We deliver products worldwide. We provide export procedures.`}
		>
			<div className={styles.containerSingleProduct}>
				<div className={styles.title}>
					<h1>{product.title}</h1>
				</div>
				<div className={styles.image}>
					<Image
						alt={product.title}
						src={product.image}
						width={240}
						height={180}
						draggable={false}
						priority
					/>

					<div className={styles.table}>
						<div className=''>
							<div className='p-1.5 w-auto inline-block align-middle '>
								<div className='overflow-hidden  rounded-lg border border-gray-300'>
									<table className='min-w-full divide-y divide-gray-300   '>
										<thead className='bg-gray-100'>
											<tr>
												<th
													scope='col'
													className='px-6 py-3 text-lg font-bold text-left text-gray-500 uppercase '
												>
													Paking
												</th>
												<th
													scope='col'
													className='px-6 py-3 text-lg font-bold text-left text-gray-500 uppercase '
												>
													Price
												</th>
												<th
													scope='col'
													className='px-6 py-3 text-lg font-bold text-right text-gray-500 uppercase '
												>
													Availability
												</th>
											</tr>
										</thead>
										<tbody className='divide-y divide-gray-300'>
											<tr>
												<td className='px-6 py-4 text-base text-gray-800 whitespace-nowrap '>
													On Request
												</td>
												<td className='px-6 py-4 text-base text-gray-800 whitespace-nowrap'>
													On Request
												</td>
												<td className='px-6 py-4 text-base font-medium  text-center whitespace-nowrap'>
													<span>
														<FcCheckmark />
													</span>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.description}>
					<h2>Description</h2>
					<div className={styles.item_description}>
						{parse(product.description)}
					</div>
					<p>
						You can buy
						<span className='font-semibold'> {product.title}</span> from
						Sigmanit OÜ from the warehouse at low price. We deliver products
						worldwide. We provide export procedures.
					</p>
				</div>
			</div>

			<Footer />
		</Meta>
	)
}

export default SingleProductPage
