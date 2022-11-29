import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Connect = () => {
  return (
    <div id='connect' className='flex flex-col items-center justify-center h-screen text-white'>
      <h2 className='text-7xl font-bold mb-10'>Find Me</h2>
        <button className='flex flex-row items-center hover:bg-gray-500 rounded-md p-1'>
          <Link href="https://github.com/haojie9777" target="_blank">
            <Image quality="100" width="50" height="50" src='/github-light.png'></Image>
          </Link>
          <span className='m-5 text-cyan-400 text-lg'>@haojie9777</span>
        </button>
    </div>
  )
}
export default Connect  