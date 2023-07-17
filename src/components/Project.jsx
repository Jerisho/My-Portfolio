import React, { useEffect, useState} from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import Tech from './Tech'
import DivSeparator from './DivSeparator'
import { motion } from 'framer-motion'
const Project = ({ img, alt, title, technology, detail }) => {
  const [tech, setTech] = useState([])
  const variant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1}
  }
  
  useEffect(() => {
    setTech(technology)
  }, [technology])
  
  return (
        <>
          <motion.div
            variants= {variant }
            className={`flex flex-col justify-center items-center w-[325px] h-[250px] xs:w-[400px] xs:h-[290px] z-15 rounded-tl-3xl 
                            rounded-br-3xl bg-icon-blue 
                            hover:shadow-custom hover:shadow-sky-700 transition duration-500 cursor-pointer z-10`}>
              <h1 className='font-opensans text-3xl mb-[4px]'>{title}</h1>
              <DivSeparator/>
              <div className='relative w-full h-full'>
                <div className='absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
                bg-grey z-30 flex felx-col justify-center items-center '>
                  <p>{detail}</p>
                </div>
                <img src={img} alt={alt} className={`relative w-[500px] blur-xs`}></img>

              </div>
              <div className={"flex flex-row justify-center w-full my-[10px] px-[5px]"}>
                {tech.map((i => 
                    <Tech
                      key = {i.id}
                      img = {i.img}
                      alt = {i.alt}
                      wd = {i.wd}
                    />
                  ))}             
              </div>
            </motion.div>
       </>
        
  )
}

export default Project