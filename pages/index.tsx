import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from "../components/Hero"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hao Jie</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="Hi, I'm Hao Jie" message="A software engineer based in Singapore" />

    </div>
  )
}

export default Home
