import 'tailwindcss/tailwind.css'
import '../styles/colors.css'
import { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
