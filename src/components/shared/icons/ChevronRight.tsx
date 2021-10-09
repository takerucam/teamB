import { ComponentPropsWithRef } from 'react'

interface IconProps extends ComponentPropsWithRef<"svg"> {}

export const ChevronRight = ({ ...props }: IconProps): JSX.Element => {
  return (
    <svg {...props} width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L9 9L1 17" stroke="#F0F3F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}