import React from 'react'
import Title from '../components/Title'
import { testimonials } from '../components'
import GlowCards from '../components/GlowCards'

const Testmonials = () => {
  return (
    <section id='testimonials' className='flex-center section-padding'>
        <div className='w-full h-full md:px-10 px-5'>
            <Title
                title='What People Say About Me'
                sub="✨ Client Feedback Highlights"

            />

            <div className='lg:columns-3 md:columns-2 columns-1 mt-16'>
                {testimonials.map(({imgPath,name,mentions,review})=>(
                    <GlowCards card={{review}}>
                        <div className='flex items-center gap-3'>
                            <div>
                                <img src={imgPath} alt={name} />
                            </div>
                        </div>
                        <p>
                            {name}
                        </p>
                        <p className='text-white-50'>
                            {mentions}
                        </p>
                    </GlowCards>
                ))}

            </div>

        </div>
    </section>
  )
}

export default Testmonials
