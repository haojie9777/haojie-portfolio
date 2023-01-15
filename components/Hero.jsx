import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div id='hero' className='
     flex flex-col justify-center items-center h-screen mt-[100px]'>
      <div className='mb-10'>
        <Image width="300" height="300" src="/hiking-pic-ok.png" quality='100'></Image>
      </div>
      <h1 className='to-animate opacity-0 transition-all duration-1000 mr-auto text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400'>Hao Jie</h1>
      <p className='to-animate opacity-0 transition-all duration-1000 text-amber-400 mr-auto text-sm'>Software Engineer / Caffeine Junkie / Cat Person</p>
      <p className='to-animate opacity-0 transition-all duration-1000 mt-10 text-justify text-white'>I am predominantly a backend developer, but I do dabble in frontend sometimes.
        I wish to leverage on technology to empower the lives of people around me. Currently involved in designing and engineering distributed system solutions
        that are highly scalable and reliable in my current job. Feel free to connect with me regarding anything :D
      </p>
      <div className='to-animate opacity-0 transition-all duration-1000 mt-5 mb-10'>
        <a href="/HaoJie_Resume_080122.pdf" target="_blank" rel="noopener noreferrer">
          <button className="bg-transparent hover:bg-green-500 text-xl text-white hover:text-white
         py-2 px-4 border border-emerald-500 hover:border-transparent rounded">
            My Resume
          </button>
        </a>
      </div>

    </div>
  )
}
export default Hero