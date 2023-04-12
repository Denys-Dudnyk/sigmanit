import clsx from 'clsx'
import { FC } from 'react'
import styles from './HeaderNav.module.scss'
import { IHeaderNavItem } from './header-nav.interface'
import Link from 'next/link'
const HeaderNavItem: FC<IHeaderNavItem> = ({
	link,
	setIsVisible,
	text,
	variant,
}) => {
	return (
		<li
			className={clsx({
				[styles.link]: variant === 'outside',
				[styles.verticalLink]: variant === 'inside',
			})}
			onClick={() => setIsVisible(false)}
		>
			<Link href={link} scroll={false}>
				{text}
			</Link>
		</li>
	)
}
export default HeaderNavItem
