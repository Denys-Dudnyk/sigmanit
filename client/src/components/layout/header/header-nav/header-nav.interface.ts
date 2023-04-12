import { Dispatch, SetStateAction } from 'react'

export interface IHeaderNavItem {
	link: string
	text: string
	variant?: string
	setIsVisible: Dispatch<SetStateAction<boolean>>
}

export interface IHeaderNav {
	links: Omit<IHeaderNavItem, 'setIsVisible'>[]
	variant: 'inside' | 'outside'
	setIsVisible: Dispatch<SetStateAction<boolean>>
}

export const headerLinks: Pick<IHeaderNav, 'links'> = {
	links: [
		{
			link: '/#home',
			text: 'Home',
		},
		{
			link: '/#about-us',
			text: 'About Us',
		},
		{
			link: '/#products',
			text: 'Our Products',
		},
		{
			link: '/#contacts',
			text: 'Contacts',
		},
	],
}
