import { FC } from 'react'
import styles from './About.module.scss'
import Link from 'next/link'
import SectionContainer from '@/components/ui/section/SectionContainer'

const About: FC = () => {
	return (
		<SectionContainer id='about-us' className={styles.about}>
			<div className={styles.containerAbout}>
				<h1>
					Empowering your chemistry needs with
					<span className='uppercase font-semibold '> Sigmanit OÜ</span>- your
					trusted source for quality chemical components
				</h1>

				<div className={styles.elements}>
					<div className={styles.left_side}>
						<h2>Import of chemical components</h2>
						<p>
							The <span className='uppercase font-semibold '>Sigmanit OÜ </span>
							company supplies imported chemical raw materials (Europe) under
							the order. Delivery time - from 14 days. Order volume: from tons
							to a container. We will promptly place your order in the nearest
							shipping container. Detailed information can be found in the
							<Link href='/#products' scroll={false}>
								<span className='text-violet'> PRODUCTS </span>
							</Link>
							section.
						</p>
					</div>
					<div className={styles.right_side}>
						<h2 className=''>
							Wholesale and retail sale of chemical components
						</h2>
						<p>
							The main activity of{' '}
							<span className='uppercase font-semibold '>Sigmanit OÜ </span> is
							a wholesaler of components that are used for production of
							varnishes, paints, emulsions, as well as in metalworking and
							required for glass production. And some serve as the basis for
							creation of agricultural fertilizers.
						</p>
					</div>
				</div>
			</div>
		</SectionContainer>
	)
}
export default About
