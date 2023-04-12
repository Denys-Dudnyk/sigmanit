import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './Footer.module.scss'
import logo from '/public/logo3.svg'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.row}>
					<div className={styles.col_md_3}>
						<Link href='/'>
							<Image
								src={logo}
								className='transition-all hover:scale-110 animate-fade '
								width={200}
								height={147}
								alt='Reviewer1'
								draggable={false}
								priority
							/>
						</Link>
						2023 © Sigmanit OÜ
						<br />
					</div>
					<div className={styles.col}>
						<div className={styles.colTitle}>Menu</div>
						<div className={styles.col_text}>
							<ul>
								<li>
									<Link href='#home' scroll={false}>
										Home
									</Link>
								</li>
								<li>
									<Link href='#about-us' scroll={false}>
										About us
									</Link>
								</li>
								<li>
									<Link href='#products' scroll={false}>
										Our Products
									</Link>
								</li>

								<li>
									<Link href='#contacts' scroll={false}>
										Contacts
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className={styles.col}>
						<div className={styles.colTitle}>Contact</div>
						<div className={styles.col_text}>
							<ul>
								<li>
									<h1>Sigmanit OÜ</h1>
								</li>
								<li>
									<h2>EE102596098</h2>
								</li>
								<li>
									<Link href='mailto:sigmanit.ee@gmail.com'>
										sigmanit.ee@gmail.com
									</Link>
								</li>
								<li>
									<h1>Karu tn 14-8,10120 Tallinn</h1>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer
