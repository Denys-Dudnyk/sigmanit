import { AnimatePresence, motion } from 'framer-motion'

import styles from './HamburgerMenu.module.scss'
import { Dispatch, SetStateAction } from 'react'
import HeaderNav from '@/components/layout/header/header-nav/HeaderNav'
import { headerLinks } from '@/components/layout/header/header-nav/header-nav.interface'

interface IHamburgerMenu {
	show: boolean
	setIsVisible: Dispatch<SetStateAction<boolean>>
}

export default function HamburgerMenu({
	show,

	setIsVisible,
}: IHamburgerMenu) {
	return (
		<AnimatePresence>
			{show && (
				<motion.div
					className={styles.hamburgerMenu}
					key='hamburger-menu'
					initial={{ opacity: 0, left: '-100%' }}
					animate={{
						left: 0,
						opacity: 1,
					}}
					exit={{ opacity: 0, left: '-100%' }}
					transition={{ duration: 0.6 }}
				>
					<HeaderNav
						links={headerLinks.links}
						variant='inside'
						setIsVisible={setIsVisible}
					/>
					{/* <SocialLinksContainer links={links} variant='menu' /> */}
				</motion.div>
			)}
		</AnimatePresence>
	)
}
