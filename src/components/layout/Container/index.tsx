import { ComponentPropsWithRef, ReactNode } from 'react'

interface ContainerProps extends ComponentPropsWithRef<'div'> {
  children?: ReactNode
  className?: string
}

export const Container = ({ children, className, ...props }: ContainerProps): JSX.Element => {
  return (
    <div className={['container mx-auto px-5 py-5', className].join(' ')} {...props}>
      {children}
    </div>
  )
}