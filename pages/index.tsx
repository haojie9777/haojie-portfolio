import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from "../components/Hero"
import Expertise from "../components/Expertise"
import Connect from "../components/Connect"
import Work from "../components/Work"
const Home: NextPage = () => {
  return (
    <div className="bg-zinc-900 flex flex-col items-center justify-center">
      <Head>
        <title>Hao Jie - Homepage</title>
        <meta name="description" content="Hao Jie's Homepage" />
        <link rel="icon" href="/icons8-cat-32.png" />
      </Head>
      <div className="w-5/6 md:w-1/3">
        <Hero />
        <Expertise />
        <Work />
        <Connect />
      </div>

    </div>
  )
}

export default Home


