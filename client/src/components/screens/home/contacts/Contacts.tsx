import { FC } from 'react'
import styles from './Contacts.module.scss'
import Link from 'next/link'
import Form from '@/components/ui/form/Form'
import { MdOutlineMailOutline } from 'react-icons/md'
import SectionContainer from '@/components/ui/section/SectionContainer'

const Contacts: FC = () => {
	return (
		<SectionContainer id='contacts' className={styles.contacts}>
			<div className={styles.containerContacts}>
				<div className={styles.left_side}>
					<h2>Contact us</h2>
					<Form />
				</div>
				<div className={styles.right_side}>
					<li className='HeaderNav_link__jMlJr'>
						<MdOutlineMailOutline />
						<Link href='mailto:sigmanit.ee@gmail.com'>
							sigmanit.ee@gmail.com
						</Link>
					</li>
				</div>
			</div>
		</SectionContainer>
	)
}
export default Contacts
