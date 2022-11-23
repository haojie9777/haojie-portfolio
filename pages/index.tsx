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
      <div className='flex flex-col justify-center items-center'>
        <div className="mb-10 text-start">
          <Hero />
        </div>
        <div className='mt-10'>
          <Expertise />
        </div>
        <div>
          <Work />
        </div>
        <div>
          <Connect />
        </div>
      </div>
    </div>
  )
}

export default Home


