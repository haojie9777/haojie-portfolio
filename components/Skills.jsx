import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='
     flex flex-col items-center justify-center h-screen text-white'>
      <h2 className='text-7xl font-bold '>Skills</h2>
      <div className='to-animate opacity-0 transition-all duration-1000 first-letter:flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
        <p className='font-bold text-green-400'>[Work In Progress]</p>
        <p className='m-6 text-3xl'>Backend</p>
        <p>Java</p>
        <p>Spring Boot</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
        <p className='m-6 text-3xl'>Frontend</p>
        <p>React</p>
        <p>NextJS</p>
        <p>Tailwind</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
        <p className='m-6 text-3xl'>Infrastructure</p>
        <p>MySQL</p>
        <p>Kubernates</p>
        <p>Apache RocketMQ</p>
          </div>
      </div>
    </div>
  )
}
export default Skills  