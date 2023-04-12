import { FC } from 'react'
import styles from './HeaderNav.module.scss'
import { IHeaderNav } from './header-nav.interface'
import clsx from 'clsx'
import HeaderNavItem from './HeaderNavItem'
import { useOutside } from '@/hooks/useOutside'
import Button from '@/components/ui/button/Button'

import Modal from '@/components/ui/modal/Modal'
import Form from '@/components/ui/form/Form'
const HeaderNav: FC<IHeaderNav> = ({ links, setIsVisible, variant }) => {
	const { isShow, setIsShow, ref } = useOutside(false)

	return (
		<>
			<nav>
				<ul
					className={clsx(styles.nav, {
						[styles.verticalNav]: variant === 'inside',
					})}
				>
					{variant === 'outside'}
					{links.map(l => (
						<HeaderNavItem
							link={l.link}
							text={l.text}
							key={l.link}
							setIsVisible={setIsVisible}
							variant={variant}
						/>
					))}
					<Button onClick={() => setIsShow(true)} title='Contacts'>
						Contact us
					</Button>
				</ul>
			</nav>
			<Modal
				isShow={isShow}
				setIsShow={setIsShow}
				title='Keep in touch'
				ref={ref}
			>
				<Form />
			</Modal>
		</>
	)
}
export default HeaderNav
