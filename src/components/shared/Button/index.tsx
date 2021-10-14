import { ComponentPropsWithRef, ReactNode } from 'react'
import styles from './styles.module.css'

interface ButtonProps extends ComponentPropsWithRef<"button">{
  children?: ReactNode
  variant?: "fill" | "outlined";
}

export const Button = ({ variant = "outlined", children, ...props }: ButtonProps): JSX.Element => {
  return (
    <button className={[styles.base, styles[variant]].join(' ')} {...props}>
      {children}
    </button>
  )
}