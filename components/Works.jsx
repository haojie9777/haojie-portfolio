import React from 'react'
import Image from 'next/image'


const Works = () => {
    return (
        <div id="works" className='
    flex flex-col items-center justify-center h-screen text-white'>
            <h2 className='text-7xl font-bold '>Works</h2>
            <div className=' flex-col items-center justify-center'>
                <div className='to-animate opacity-0 transition-all duration-1000 m-auto mt-5 flex flex-col items-center'>
                    <p className='mt-3 m-3 text-4xl font-bold text-green-400'>
                        <span>guit</span>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>AR</span>
                    </p>
                    <p className='text-sm text-justify'>A computer vision project exploring the use of markerless
                        augmented reality for guitar learning.
                    </p>
                    <div className='mt-3'>
                    <Image width="250" height="200" src="/images/guitAR.png" quality='100'></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works