import { Dispatch } from 'react'

export interface IModal {
	isShow: boolean
	setIsShow: Dispatch<boolean>
	title: string
}

export type Ref = HTMLDivElement
