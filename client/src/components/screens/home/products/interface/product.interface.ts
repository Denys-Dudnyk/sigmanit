export interface IMenuItem {
	icon: string
	title: string
	link: string
	description: string
}

export interface IMenu {
	title: string
	items: IMenuItem[]
}
