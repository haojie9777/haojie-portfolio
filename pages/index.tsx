import Script from 'next/script'
import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Connect from "../components/Connect"
import Bio from "../components/Bio"

const Home: NextPage = () => {
  return (
    <div className="bg-zinc-900 flex flex-col items-center justify-center">
      <Head>
        <title>Hao Jie - Homepage</title>
        <meta name="description" content="Hao Jie's Homepage" />
        <link rel="icon" href="/icons8-cat-back-view-32.png" />
      </Head>
      <Script src="app.js" strategy='lazyOnload'></Script>
      <div className="w-5/6 md:w-1/3">
        <Hero/>
        <Skills />
        <Bio />
        <Connect />
      </div>
    </div>
  )
}

export default Home

