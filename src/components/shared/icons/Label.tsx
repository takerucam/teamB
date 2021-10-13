import { ComponentPropsWithRef } from 'react'

interface IconProps extends ComponentPropsWithRef<"svg"> {}

export const Label = ({ ...props }: IconProps): JSX.Element => {
  return (
    <svg {...props} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.97891 4.63599V4.63299H4.98191C5.58585 4.57938 6.19104 4.54104 6.79691 4.51799C8.25691 4.45999 9.98991 4.46799 11.2769 4.65999C11.3576 4.67565 11.4311 4.71663 11.4869 4.77699L19.2409 12.53C19.2875 12.5764 19.3244 12.6316 19.3496 12.6924C19.3748 12.7531 19.3878 12.8182 19.3878 12.884C19.3878 12.9498 19.3748 13.0149 19.3496 13.0756C19.3244 13.1364 19.2875 13.1915 19.2409 13.238L13.5839 18.894C13.4901 18.9877 13.363 19.0404 13.2304 19.0404C13.0978 19.0404 12.9707 18.9877 12.8769 18.894L5.12291 11.141C5.06255 11.0852 5.02156 11.0117 5.00591 10.931C4.81391 9.64399 4.80591 7.91099 4.86391 6.45099C4.89191 5.72899 4.93691 5.09199 4.97891 4.63599V4.63599Z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M10.1421 9.8801C10.5326 9.48957 10.5326 8.85641 10.1421 8.46588C9.75155 8.07536 9.11838 8.07536 8.72786 8.46588C8.33733 8.85641 8.33733 9.48957 8.72786 9.8801C9.11838 10.2706 9.75155 10.2706 10.1421 9.8801Z" fill="white"/>
    </svg>
  )
}