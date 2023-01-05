import { motion } from 'framer-motion'
import React from 'react'
import {  Skill as skillType} from '../typings'
import Skill from './skill/Skill'

type Props = {
  skills: skillType[] | null
}

const Skills = ({skills}: Props) => {
  // console.log(skills)
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto items-center justify-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>skills</h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-2xl'>Hover over a skill for currenct profieciency</h3>
      <div className='grid grid-cols-4 gap-5'>
        
        {skills?.slice(0, skills.length / 2).map(skill => (<Skill key={skill._id} skill={skill}/>))}
        {skills?.slice(skills.length / 2, skills.length).map(skill => (<Skill key={skill._id} skill={skill} directionLeft/>))}
       
      </div>
    </motion.div>
  )
}

export default Skills