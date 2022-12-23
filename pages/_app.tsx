import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


//may only import css styles in here 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <div className='bg-hero'>
    <Navbar/>
  <Component {...pageProps} />
  <Footer/>
    </div>
    </>
  );
}

export default MyApp
 