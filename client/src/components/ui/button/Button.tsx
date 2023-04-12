import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	classname?: string
}

export default function Button({
	classname,
	children,
	...rest
}: PropsWithChildren<IButton>) {
	return (
		<button className={clsx(styles.button, classname)} {...rest}>
			{children}
		</button>
	)
}
