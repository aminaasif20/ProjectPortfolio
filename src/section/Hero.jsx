import React from 'react'
import { words } from '../components/index.js'
import Button from '../components/Button.jsx'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import HeroExperience from '../components/HeroModels/HeroExperience.jsx'
import Particles from '../components/HeroModels/Particles.jsx'
import AminatedCounter from '../components/HeroModels/AminatedCounter.jsx'

const Hero = () => {
  useGSAP(()=>{
    gsap.fromTo('.hero-text h1',
      {
        y:50,
        opacity:0
      },
      {
        y:0,
        opacity:1,
        stagger:0.2,
        duration:1,
        ease:'power2.inOut'
      }
    )
  })


  return (
    <section id =" hero " className="relative overflow-hidden">
    <div className="absolute top-0 left-0 z-0">
      <img src="/images/bg.png " alt="backgroung"/>
    </div>

    <div className="hero-layout">
      {/* left  <Hero/> */}
      <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
        <div className="flex flex-col gap-7">
          <div className="hero-text">
            <h1 className="flex items-center text-3xl font-bold">
                Shaping
                <span className="ml-4 silde overflow-hidden h-14 w-64">
                    <span className="wrapper">
                    {words.map((word) => (
                        <span
                        key={word.text}
                        className="slide-item flex items-center gap-2 w-full h-16"
                        >
                        <img
                            src={word.imgPath}
                            alt={word.text}
                            className="w-10 h-10 rounded-full bg-white/50 p-1"
                        />
                        <span>{word.text}</span>
                        </span>
                    ))}
                    </span>
                </span>
            </h1>

            
            <h1>into real projects</h1>
            <h1>that deliver results</h1>
          </div>
          <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
                Hi, I'm <span className="font-semibold text-primary">Amina</span>, a developer based in <span className="font-semibold text-green-600">Pakistan</span>
                <br />
                with a deep passion for writing meaningful and impactful code.
          </p>
          <Button
          className='md:w-80 md:h-16 w-60 h-12'
          id='button'
          text='see my work'
          />
        </div>
      </header>

      {/* right  3D */}
      {/* <Particles/> */}
      <figure>
        <div className='hero-3d-layout'>
          <HeroExperience/>
        </div>
      </figure>
      
      

    </div>
<AminatedCounter/>
  </section>
  )
}

export default Hero
