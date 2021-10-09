import styles from './styles.module.css'
import { ComponentPropsWithRef } from 'react'
import { Button } from '../Button'
import Link from 'next/link'
import { useRouter } from 'next/router'

export interface HeaderNavigationProps extends ComponentPropsWithRef<'header'> {
  className?: string
}

export const HeaderNavigation = ({ className, ...props }: HeaderNavigationProps): JSX.Element => {
  const { pathname } = useRouter()

  return (
    <header className={[styles.header, className].join(' ')} {...props}>
      <Link href='/'>
        <a>
          <Button
            variant={pathname === '/' ? 'fill' : 'outlined'}
          >
            Map
          </Button>
        </a>
      </Link>
      <Link href='/list'>
        <a>
          <Button
            variant={pathname === '/list' ? 'fill' : 'outlined'}
          >
            List
          </Button>
        </a>
      </Link>
    </header>
  )
}