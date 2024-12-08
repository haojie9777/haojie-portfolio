import React from 'react'
import Image from 'next/image'
import TypeWriter from 'typewriter-effect/dist/core'
import { useEffect} from 'react'



const Hero = () => {

  // typewriter effect for my name
  useEffect(() => {
    var app = document.getElementById('my-name');
    var typewriter = new TypeWriter(app, {
      loop: false,
      delay: 75,
    });
    typewriter
      .pauseFor(1000)
      .typeString('<Span style="color: #FFFFFF">Hao Jie, a </Span>')
      .pauseFor(1000)
      .typeString('Software Engineer')
      .pauseFor(1000)
      .typeString(' (also a chill guy)')
      .pauseFor(1000)
      .start();
  }, [])

  return (
    <div id='hero' className='
     flex flex-col justify-center items-center h-screen mt-[200px] mobile:mt-[100px]'>
      <div className='mb-10'>
        <Image width="300" height="300" src="/chill_guy.jpg" quality='100'></Image>
      </div>
      <h1 className='to-animate opacity-0 transition-all duration-1000 mr-auto text-4xl font-medium text-white'>
        Hi, I&apos;m <span id="my-name" className='text-green-400'></span> </h1>
    
      <p className='to-animate opacity-0 transition-all duration-1000 mt-10 text-justify text-white'>
        I am passionate in backend development work, as I find the challenge of making large scale
        systems work together to be very interesting. I believe clean and readable coding is a form of art on its own.
        Ultimately, I want to be a software engineer that can make a positive impact on the world. Currently I have about 2.5 years
        of professional software engineering experience.
      </p>
      <div className='to-animate opacity-0 transition-all duration-1000 mt-5 mb-10'>
        <a href="/HaoJie_Resume_190823.pdf" target="_blank" rel="noopener noreferrer">
          <button disabled className="bg-transparent hover:bg-gray-500 text-xl text-white hover:text-white
         py-2 px-4 border border-emerald-500 hover:border-transparent rounded">
            My Resume (Coming Soon)
          </button>
        </a>
      </div>

    </div>
  )
}

export default Hero