import React from 'react'
import Image from 'next/image'

const Connect = () => {
  return (
    <div id='connect' className='flex flex-col items-center justify-center h-screen text-white'>
      <div className='flex flex-row justify-center items-center'>
        <h2 className='text-7xl font-bold mb-10'>Find Me
        </h2>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 20" fill="currentColor" className="w-7 h-7 animate-bounce">
          <path fillRule="evenodd" d="M14.77 4.21a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0
           011.08-1.04L10 8.168l3.71-3.938a.75.75 0 011.06-.02zm0 6a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08
            0l-4.25-4.5a.75.75 0 111.08-1.04L10 14.168l3.71-3.938a.75.75 0 011.06-.02z" clipRule="evenodd" />
        </svg>


      </div>

      <div className='to-animate opacity-0 transition-all duration-1000'>
        <a href="https://github.com/haojie9777" target="_blank" rel="noreferrer">
          <button className='flex flex-row items-center p-1'>
            <Image quality="100" width="50" height="50" src='/github-light.png'></Image>
            <span className='m-5 text-cyan-400 text-lg'>@haojie9777</span>
          </button>
        </a>
        <a href="https://www.linkedin.com/in/tanhaojie/" target="_blank" rel="noreferrer">
          <button className='flex flex-row items-center rounded-md p-1'>
            <Image quality="100" width="60" height="60" src='/linkedin-light.png'></Image>
            <span className='m-5 text-cyan-400 text-lg'>Tan Hao Jie</span>
          </button>
        </a>
        <a className="" href="mailto: haojie9777@gmail.com" target="_blank" rel="noreferrer">
          <button className='flex flex-row items-center rounded-md p-1'>
            <Image quality="100" width="50" height="50" src='/gmail-light.png'></Image>
            <span className='m-5 text-cyan-400 text-lg'>haojie9777@gmail.com</span>
          </button>
        </a>
      </div>
    </div>
  )
}
export default Connect  