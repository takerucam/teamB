import { ComponentPropsWithRef } from 'react'
import styles from './styles.module.css'
import { ChevronRight } from '../icons/ChevronRight'

export interface CardProps extends ComponentPropsWithRef<'div'> {
  className?: string
  size?: 'medium' | 'large'
  title?: string
  subtitle?: string
  thumbnailUrl?: string
}

export const Card = ({
  className,
  size = 'medium',
  title = '物件名',
  subtitle = '住所',
  thumbnailUrl = '',
  ...props
}: CardProps): JSX.Element => {
  return (
    <div
      className={[styles.base, styles[size], className].join(' ')}
      style={{
        backgroundImage: `url(${thumbnailUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      {...props}
    >
      <h3 className={styles.card__title}>{title}</h3>
      <p className={styles.card__subtitle}>{subtitle}</p>
      <ChevronRight className={styles.card__icon} />
    </div>
  )
}
