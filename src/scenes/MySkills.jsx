import React from 'react'
import DivSeparator from '../components/DivSeparator'
import FBlogo from '../assets/FBlogo.png'
import RClogo from '../assets/REACTlogo.png'
import HTMLlogo from '../assets/HTMLlogo.png'
import CSSlogo from '../assets/CSS3logo.png'
import TWlogo from '../assets/TWlogo.png'
import JSlogo from '../assets/JSlogo.png'
import { motion } from 'framer-motion'

const MySkills = () => {
  return (
    <section id="skills"  
        className='flex flex-col justify-between mt-[20px] md:mt-[50px]'
        >
        <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport= {{once: true, amount: 0.5}}
                    transition={{ duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, x: -300},
                        visible: { opacity: 1, x: 0}
                    }}
                >
        <div className='flex justify-center mb-12'>  
            <h2 className='text-6xl'>My Skills</h2>
        </div>
        </motion.div>
        <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport= {{once: true, amount: 0.8}}
                    transition={{ duration: 0.8 }}
                    variants={{
                        hidden: { opacity: 0, x: -300},
                        visible: { opacity: 1, x: 0}
                    }}
                >
        <div className='flex justify-center w-full h-full mb-5 gap-5'>
          <div className='flex justify-center items-center w-32 h-32 sm:w-[200px] sm:h-[200px] z-15 rounded-tl-3xl rounded-br-3xl bg-icon-blue
            hover:shadow-custom hover:shadow-sky-700'>
            <img src={HTMLlogo} alt="Image_HTML" className='w-[160px] z-10'></img>
          </div>
          <div className='flex justify-center items-center w-32 h-32 sm:w-[200px] sm:h-[200px] z-15 rounded-tl-3xl rounded-br-3xl bg-icon-blue
            hover:shadow-custom hover:shadow-sky-700'>
            <img src={CSSlogo} alt="Image_CSS3" className='w-[115px] z-10'  />
          </div>          <div className='flex justify-center items-center w-32 h-32 sm:w-[200px] sm:h-[200px] z-15 rounded-tl-3xl rounded-br-3xl bg-icon-blue
            hover:shadow-custom hover:shadow-sky-700'>
            <img src={JSlogo} alt="Image_JS" className='w-[140px] z-10'  />
          </div>         
        </div>
        </motion.div>
        <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport= {{once: true, amount: 0.5}}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -300},
                        visible: { opacity: 1, x: 0}
                    }}
                >
        <div className='flex justify-center w-full h-full mb-5 gap-5'>
          <div className='flex justify-center items-center w-32 h-32 sm:w-[200px] sm:h-[200px] z-15 rounded-tl-3xl rounded-br-3xl bg-icon-blue
            hover:shadow-custom hover:shadow-sky-700'>
            <img src={RClogo} alt="Image_REACT" className='w-[150px] z-10'  />
          </div>
          <div className='flex justify-center items-center w-20 h-20 sm:w-[200px] sm:h-[200px] z-15 rounded-tl-3xl rounded-br-3xl bg-icon-blue
            hover:shadow-custom hover:shadow-sky-700'>
            <img src={TWlogo} alt="Image_TAILWIND" className='w-[150px] z-10'  />
          </div>          
          <div className='flex justify-center items-center w-32 h-32 sm:w-[200px] sm:h-[200px] z-15 rounded-tl-3xl rounded-br-3xl bg-icon-blue
            hover:shadow-custom hover:shadow-sky-700'>
            <img src={FBlogo} alt="Image_FIBEBASE" className='w-[80px] z-10'  />
          </div>        
        </div>
        </motion.div>
    </section>
  )
}

export default MySkills