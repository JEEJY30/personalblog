import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const BackgroundCircles = ({}: Props) => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{scale: [1,2,2,3,1], opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1]}}
    transition={{duration: 2.5}}
    className='relative flex justify-center items-center'>
      <div className='absolute rounded-full border border-[#333333] h-[200px] w-[200px] mt-52 animate-ping'/>
      <div className='absolute rounded-full border border-[#333333] h-[300px] w-[300px] mt-52 animate-ping'/>
      <div className='absolute rounded-full border border-[#333333] h-[400px] w-[400px] mt-52 animate-ping'/>
      <div className='absolute rounded-full border border-[#f7ab0a] opacity-20 h-[650px] w-[650px] mt-52 animate-pulse'/>
      <div className='absolute rounded-full border border-[#333333] h-[800px] w-[800px] mt-52'/>
    </motion.div>
  )
}

export default BackgroundCircles