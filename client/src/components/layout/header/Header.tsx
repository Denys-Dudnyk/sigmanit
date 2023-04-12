import Image from 'next/image'
import Link from 'next/link'
import { FC, useState, useCallback } from 'react'
import styles from './Header.module.scss'
import logo from '/public/logo3.svg'

import HeaderNav from './header-nav/HeaderNav'
import { headerLinks } from './header-nav/header-nav.interface'
import dynamic from 'next/dynamic'
import HamburgerMenu from '@/components/ui/hamburger-menu/HamburgerMenu'

const Hamburger = dynamic(() => import('hamburger-react').then(h => h.Turn), {
	ssr: false,
})

const Header: FC = () => {
	const [isVisible, setIsVisible] = useState(false)

	const handleBurgerClick = useCallback(() => {
		setIsVisible(!isVisible)
	}, [isVisible])

	return (
		<>
			<header className={styles.header}>
				<div className={styles.container}>
					<Link href='/'>
						<Image
							src={logo}
							className='transition-all hover:scale-110 animate-fade'
							width={200}
							height={147}
							alt='Reviewer1'
							draggable={false}
							priority
						/>
					</Link>
					<div className={styles.navContainer}>
						<HeaderNav
							links={headerLinks.links}
							variant='outside'
							setIsVisible={setIsVisible}
						/>
						<span>
							<Hamburger
								rounded
								label='Show menu'
								distance='sm'
								size={30}
								duration={0.5}
								toggled={isVisible}
								onToggle={() => handleBurgerClick()}
							/>
						</span>
					</div>
				</div>
			</header>
			<HamburgerMenu show={isVisible} setIsVisible={setIsVisible} />
		</>
	)
}
export default Header
