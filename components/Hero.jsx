import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div id='hero' className='to-animate opacity-0 transition-all duration-1000
     flex flex-col justify-center items-center h-screen mt-[100px]'>
      <div className='mb-10'>
        <Image width="300" height="300" src="/cat-gif.gif"></Image>
      </div>
        <h1 className='mr-auto text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400'>Hao Jie</h1>
        <p className='text-amber-400 mr-auto text-sm'>Software Engineer / Tech Enthusiast / Caffeine Junkie / Cat Person 🐾</p>
        <p className='mt-10 text-justify text-white'>I am predominantly a backend developer, with a keen interest in leveraging technology to empower the lives of people around me. 
        In my current job, I am involved in designing and engineering distributed system solutions
          that are highly scalable and reliable. Feel free to connect with me regarding any opportunities or for coffee :D
        </p>
      
      </div>
  )
}
export default Hero