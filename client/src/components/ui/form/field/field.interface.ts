import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
export interface IFieldProps {
	placeholder: string
	error?: string | undefined
}

type TypeFieldProps = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeFieldProps {}
