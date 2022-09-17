import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "../components/Navbar"

//may only import css styles in here 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Navbar/>
  <Component {...pageProps} />
  </>
  );
}

export default MyApp
 