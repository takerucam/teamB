import { useRouter } from 'next/router'
import { ComponentPropsWithRef } from 'react'

interface IconProps extends ComponentPropsWithRef<'svg'> {}

export const BackAllow = ({ ...props }: IconProps): JSX.Element => {
  const router = useRouter()
  return (
    <svg
      {...props}
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => router.back()}
    >
      <path
        d="M8 1L1 8L8 15"
        stroke="#F0F3F5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 8H17"
        stroke="#F0F3F5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
