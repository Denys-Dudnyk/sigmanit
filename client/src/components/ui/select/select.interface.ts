import { ControllerRenderProps } from 'react-hook-form'
import { Options } from 'react-select'
import { IField, IFieldProps } from '../form/field/field.interface'

export interface IOption {
	value: string
	label: string
}

export interface ISelect extends IField {
	options: Options<IOption>
	isMulti?: boolean
	field: ControllerRenderProps<any, any>
	isLoading?: boolean
}
