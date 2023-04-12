import { PropsWithChildren } from 'react'
import { ISectionContainer } from './section-container.interface'
import { motion } from 'framer-motion'
import styles from './SectionContainer.module.scss'
import clsx from 'clsx'

export default function SectionContainer({
	id,
	children,
	className,
}: PropsWithChildren<ISectionContainer>) {
	return (
		<motion.section
			id={id}
			className={clsx(styles.sectionContainer, className)}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: false }}
			transition={{ duration: 0.9, repeatDelay: 0.9 }}
		>
			{children}
		</motion.section>
	)
}
