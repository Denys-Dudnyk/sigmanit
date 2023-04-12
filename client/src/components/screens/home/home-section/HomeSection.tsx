import { FC } from 'react'
import styles from './HomeSection.module.scss'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SectionContainer from '@/components/ui/section/SectionContainer'
import SectionContainerHome from '@/components/ui/section-home/SectionContainerHome'
const HomeSection: FC = () => {
	return (
		// <motion.section
		// 	id='home'
		// 	className={styles.home}
		// 	initial={{ opacity: 0, scale: 1.5 }}
		// 	whileInView={{ opacity: 1, scale: 1 }}
		// 	viewport={{ once: false }}
		// 	transition={{ duration: 0.9, repeatDelay: 0.9 }}
		// >
		<SectionContainerHome id='home' className={styles.home}>
			<div className={styles.homeContainer}>
				<h1>
					Welcome to
					<span className='uppercase text-violet  '> Sigmanit OÜ</span>
				</h1>
				<h2>
					SIGMANIT OÜ, as a company, offers a wide range of components needed in
					the chemical, metallurgical and agricultural industry.
				</h2>

				<Link href={'#about-us'} scroll={false}>
					<button>GET STARTED</button>
				</Link>
			</div>
		</SectionContainerHome>
	)
}
export default HomeSection
