/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'

import React from 'react'
import { Experience } from '../../typings'
import { urlFor } from '../../sanity'

type Props = {
  experience: Experience | null
}

const ExperienceCard = ({experience }: Props) => {
  
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] h-[600px]  md:w-[500px] lg:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
      initial={{y: -100, opacity: 0}}
      transition={{duration: 1.2}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      className='w-32 rounded-full' 
      src={urlFor(experience?.companyImage).url()} alt="img" />
      <div className='px-0 md:px-10'>
        <h4 className='uppercase tracking-[8px] text-gray-500 text-2xl md:px-10'>Ceo of ragaca</h4>
        <p className='text-4xl font-light ml-4'>ragaca</p>
          <div className='flex space-x-2 my-2'>
          {experience?.technologies?.map(technology => (
            <img
            className='w-12' 
            key={technology?._id} 
            src={urlFor(technology?.image).url()} 
            alt="image" />
          ))}
          </div>
          <p className='uppercase py-5 text-gray-300'>
            {new Date(experience?.dateStarted).toDateString()} - {experience?.isCurrentlyWorkingHere ? 'Present' : new Date(experience?.dateEnded).toDateString()}
          </p>
          
        
          <ul className='list-disc space-y-4 ml-5 text-lg h-96 overflow-y-scroll max-h-96 pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7Ab0a]/50'>
            {experience?.points?.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
    </article>
  )
}

export default ExperienceCard