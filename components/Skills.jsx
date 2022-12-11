import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='to-animate opacity-0 transition-all duration-1000
     flex flex-col items-center justify-center h-screen text-white'>
      <h2 className='text-7xl font-bold '>Skills</h2>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
        <p className='m-12 text-3xl'>Backend</p>
        <p>boiler</p>
        <p>plate</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
        <p className='m-12 text-3xl'>Frontend</p>
        <p>boiler</p>
        <p>plate</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
        <p className='m-12 text-3xl'>Infrastructure</p>
        <p>boiler</p>
        <p>plate</p>
          </div>
      </div>
    </div>
  )
}
export default Skills  