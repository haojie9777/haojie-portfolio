import React from 'react'
import Image from 'next/image'

const Connect = () => {
  return (
    <div id='connect' className='flex flex-col items-center justify-center h-screen text-white'>
      <h2 className='text-7xl font-bold mb-10'>Find Me</h2>
      <div className='to-animate opacity-0 transition-all duration-1000'>
          <a href="https://github.com/haojie9777" target="_blank" rel="noreferrer">
          <button className='flex flex-row items-center hover:bg-gray-500 rounded-md p-1'>
          <Image quality="100" width="50" height="50" src='/github-light.png'></Image>
          <span className='m-5 text-cyan-400 text-lg'>@haojie9777</span>
          </button>
          </a>
          <a href="https://www.linkedin.com/in/tanhaojie/" target="_blank" rel="noreferrer">
          <button className='flex flex-row items-center hover:bg-gray-500 rounded-md p-1'>
          <Image quality="100" width="60" height="60" src='/linkedin-light.png'></Image>
          <span className='m-5 text-cyan-400 text-lg'>Tan Hao Jie</span>
          </button>
          </a>
          <a  className="" href="mailto: haojie9777@gmail.com" target="_blank" rel="noreferrer">
          <button className='flex flex-row items-center hover:bg-gray-500 rounded-md p-1'>
          <Image quality="100" width="50" height="50" src='/gmail-light.png'></Image>
          <span className='m-5 text-cyan-400 text-lg'>haojie9777@gmail.com</span>
          </button>
          </a>
      </div>
    </div>
  )
}
export default Connect  