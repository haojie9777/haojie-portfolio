import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from "../components/Hero"
import Expertise from "../components/Expertise"
import Connect from "../components/Connect"
import Work from "../components/Work"
const Home: NextPage = () => {
  return (
    <div className="bg-zinc-800">
      <Head>
        <title>Hao Jie - Homepage</title>
        <meta name="description" content="Hao Jie's Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <Expertise />
        <Work />
        <Connect />
      </div>
    </div>
  )
}

export default Home


