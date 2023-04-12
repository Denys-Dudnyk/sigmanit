import { PropsWithChildren } from 'react'

import { motion } from 'framer-motion'
import styles from '../section/SectionContainer.module.scss'
import clsx from 'clsx'
import { ISectionContainer } from '../section/section-container.interface'

export default function SectionContainerHome({
	id,
	children,
	className,
}: PropsWithChildren<ISectionContainer>) {
	return (
		<motion.section
			id={id}
			className={clsx(styles.sectionContainer, className)}
			initial={{ opacity: 0, scale: 1.2 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: false }}
			transition={{ duration: 0.9, repeatDelay: 0.9 }}
		>
			{children}
		</motion.section>
	)
}
