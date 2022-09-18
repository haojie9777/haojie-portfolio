import React from 'react'

const Hero = () => {
  return (
    <div id='hero' className='flex items-center justify-center h-screen '>

        <div className='p-5 text-white z-[2] mt-[-10rem]'>
          <h1 className='text-7xl font-bold'>Hao Jie</h1>
          <p className='py-5 text-xl'>Software engineer based in Singapore</p>
          <p className='py-3 text-xl'>Currently a backend engineer working in the financial sector,<br/>
          handling challenges relating to microservices and distributed systems.<br/>
          </p>
          <p className='py-7 text-xl'>Feel free to connect with me regarding any opportunities, or even for coffee :D</p>
        </div>
    </div>
  )
}
export default Hero