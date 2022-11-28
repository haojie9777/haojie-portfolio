import React from 'react'

const Hero = () => {
  return (
    <div id='hero' className='flex flex-col justify-center items-center h-screen mt-[100px] p-5'>
      <div className='mb-10'>
        <img className = '' src="/cat-gif.gif"></img>
      </div>
        <h1 className='mr-auto text-7xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400'>Hao Jie</h1>
        <p className='text-amber-400 mr-auto'>Software Engineer / Tech Enthusiast / Caffeine Junkie / Cat Person🐾</p>
        <p className='mt-10 text-justify text-white'>I am predominantly a backend developer, with a keen interest in leveraging technology to empower the lives of people around me. 
        In my current job, I am involved in designing and engineering distributed system solutions
          that are highly scalable and reliable. Feel free to connect with me regarding any opportunities or for coffee :D
        </p>
      
      </div>
  )
}
export default Hero