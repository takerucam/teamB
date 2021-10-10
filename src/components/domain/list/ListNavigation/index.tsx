import { ComponentPropsWithRef, ReactNode } from 'react'
import styles from './styles.module.css'

interface ListNavigationProps extends ComponentPropsWithRef<"div">{
  children?: ReactNode
  variant?: "fill" | "outlined";
  className?: string;
}

export const ListNavigation = ({ variant = "outlined", className, children, ...props }: ListNavigationProps): JSX.Element => {
  return (
    <div className={[styles.base, styles[variant], className].join(' ')} {...props}>
      {children}
    </div>
  )
}