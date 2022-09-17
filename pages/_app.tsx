import '../styles/globals.css'
import type { AppProps } from 'next/app'

//may only import css styles in here 
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
 