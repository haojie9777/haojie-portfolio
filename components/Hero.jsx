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
      .start();
  }, [])

  return (
    <div id='hero' className='
     flex flex-col justify-center items-center h-screen mt-[200px] mobile:mt-[100px]'>
      <div className='mb-10'>
        <Image width="300" height="300" src="/hiking-pic-ok.png" quality='100'></Image>
      </div>
      <h1 className='to-animate opacity-0 transition-all duration-1000 mr-auto text-4xl font-medium text-white'>
        Hi, I&apos;m <span id="my-name" className='text-green-400'></span> </h1>
    
      <p className='to-animate opacity-0 transition-all duration-1000 mt-10 text-justify text-white'>
        I am predominantly a backend guy, but I do dabble in frontend sometimes.
        I wish to leverage on technology to empower the lives of people around me. Currently involved in designing and
         engineering distributed system solutions
        that are highly scalable and reliable in my current job. Feel free to connect with me regarding anything :D
      </p>
      <div className='to-animate opacity-0 transition-all duration-1000 mt-5 mb-10'>
        <a href="/HaoJie_Resume_080122.pdf" target="_blank" rel="noopener noreferrer">
          <button className="bg-transparent hover:bg-green-500 text-xl text-white hover:text-white
         py-2 px-4 border border-emerald-500 hover:border-transparent rounded">
            My Resume
          </button>
        </a>
      </div>

    </div>
  )
}

export default Hero