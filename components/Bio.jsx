import React from 'react'
import Timeline from '../components/Timeline'

const Bio = () => {
  return (
    <div id='bio' className='flex flex-col items-center justify-center h-screen
     text-white mt-[300px] mobile:mt-[100px] sm:mt-[0px] lg:mt-[200px] 2xl:mt-[-200px] '>
      <h2 className='text-7xl font-bold mb-5'>Bio</h2>
      <Timeline/>
</div>
  )
}
export default Bio