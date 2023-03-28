import React from 'react'
import FBlogo from '../assets/FBlogo.png'
import RClogo from '../assets/REACTlogo.png'
import HTMLlogo from '../assets/HTMLlogo.png'
import CSSlogo from '../assets/CSS3logo.png'
import TWlogo from '../assets/TWlogo.png'
import JSlogo from '../assets/JSlogo.png'
import GITLogo from '../assets/GITlogo.png'
import { motion } from 'framer-motion'
import useMediaQuery from '../hooks/useMediaQuery'
import Skill from '../components/Skill'

const MySkills = () => {
  const IsAboutMediumScreen = useMediaQuery("(min-width: 1060px)")

  return (
    <section id="skills"  
        className='flex flex-col justify-center items-center mt-[20px] mb-[20px]'
        >
        { IsAboutMediumScreen ? (
          <div>
            <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport= {{once: true, amount: 0.5}}
                        transition={{ duration: 0.6 }}
                        variants={{
                            hidden: { opacity: 0, x: -200},
                            visible: { opacity: 1, x: 0}
                        }}
                    >
            <div className='flex justify-center mb-12'>  
                <h2 className='text-6xl'>Skills</h2>
            </div>
            </motion.div>
            <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport= {{once: true, amount: 0.8}}
                        transition={{ duration: 0.8 }}
                        variants={{
                            hidden: { opacity: 0, x: -200},
                            visible: { opacity: 1, x: 0}
                        }}
                    >
{/*First line of skills - HTML - CSS3 - JS*/}
            <div className='flex justify-center w-full h-full mb-5 gap-5'>             
              <Skill img={HTMLlogo} alt="Image_HTML" wImg={"w-[160px]"} />
              <Skill img={CSSlogo} alt="Image_CSS3" wImg={"w-[115px]"} />           
              <Skill img={JSlogo} alt="Image_JS" wImg={"w-[140px]"} />        
            </div>
            </motion.div>
            <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport= {{once: true, amount: 0.5}}
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, x: -200},
                            visible: { opacity: 1, x: 0}
                        }}
                    >
{/*Second line of skills - React - Tailwind - Firebase*/}
             <div className='flex justify-center w-full h-full mb-5 gap-5'>
              <Skill img={RClogo} alt="Image_REACT" wImg={"w-[150px]"} />           
              <Skill img={TWlogo} alt="Image_TAILWIND" wImg={"w-[150px]"} />              
              <Skill img={FBlogo} alt="Image_FIREBASE" wImg={"w-[80px]"} />              
            </div>
            </motion.div>
            <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport= {{once: true, amount: 0.3}}
                        transition={{ duration: 1.2 }}
                        variants={{
                            hidden: { opacity: 0, x: -200},
                            visible: { opacity: 1, x: 0}
                        }}
                    >
{/*Third line of skills - GIT*/}
             <div className='flex justify-center w-full h-full mb-5 gap-5'>
              <Skill img={GITLogo} alt="Image_REACT" wImg={"w-[150px]"} />                     
            </div>
            </motion.div>
          </div> )
          : (            
            <div className='flex flex-col items-center'>
{/*When Not About XS Screen, view skills order HTML, CSS3, JS, REACT, TAILWIND, FIREBASE*/}
                <div className='flex justify-center mb-12'>  
                  <h2 className='text-6xl'>Skills</h2>
                </div>
              <div className='flex flex-wrap justify-center gap-7'>
                <Skill img={HTMLlogo} alt="Image_HTML" wImg={"w-[80px]"} smIMG={"sm:w-[120px]"} />
                <Skill img={CSSlogo} alt="Image_CSS3" wImg={"w-[55px]"} smIMG={"sm:w-[90px]"} />
                <Skill img={JSlogo} alt="Image_JS" wImg={"w-[70px]"} smIMG={"sm:w-[110px]"} />
                <Skill img={RClogo} alt="Image_REACT" wImg={"w-[75px]"} smIMG={"sm:w-[130px]"} />
                <Skill img={TWlogo} alt="Image_TAILWIND" wImg={"w-[100px]"} smIMG={"sm:w-[150px]"} />
                <Skill img={FBlogo} alt="Image_FIREBASE" wImg={"w-[60px]"} smIMG={"sm:w-[80px]"} />
                <Skill img={GITLogo} alt="Image_FIREBASE" wImg={"w-[90px]"} smIMG={"sm:w-[130px]"} />
              </div>  
            </div>
          )}
    </section>
  )
}

export default MySkills
