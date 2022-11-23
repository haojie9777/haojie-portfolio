import React from 'react'

const Hero = () => {
  return (
    <div id='hero' className='flex items-center justify-center h-screen mt-[100px]'>
      <div className='p-5 text-white mt-[-6rem]'>
        <div className='mb-10'>
          <img src="/cat-gif.gif"></img>
        </div>
        <h1 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-pink-800'>Hao Jie</h1>
        <p className='text-l'>Software engineer / tech enthusiast / cat lover🐾</p>
        <p className='mt-10 text-l'>I am predominantly a backend developer,
          with a keen interest <br></br> in leveraging technology to empower the lives of people around me.<br />
        </p>
        <p className='mt-2 text-l'>Feel free to connect with me regarding any opportunities and / or for coffee :D</p>
      </div>
    </div>
  )
}
export default Hero