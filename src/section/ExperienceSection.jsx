import React from 'react'
import Title from '../components/Title'
import { expCards } from '../components'
import GlowCards from '../components/GlowCards'

const ExperienceSection = () => {
    
  return (
    <section id='experience' className='w-ful md:mt-40 mt-20 section-padding xl-:px-0 '>
        <div className='w-full h-full md:px-20 px-5'>
            <Title
                 title="Professional Work Experience"
                 sub="My career Overview"
            />
        </div>
        <div className='mt-32 relative'>
            <div className='relative z-50 xl:space-y-32 space-y-10'>
                {expCards.map((card,index)=>(
                    <div key={card.title} className='exp-card-wrapper'>
                        <div className='xl:w-2/6'>
                            <GlowCards card={card} index={index}>
                                <div>
                                    <img src={card.imgPath} alt={card.title}/>
                                </div>
                            </GlowCards>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    </section>
  )
}

export default ExperienceSection
