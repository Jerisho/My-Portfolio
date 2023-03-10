import React from 'react'
import FBlogo from '../assets/FBlogo.png'
import RClogo from '../assets/REACTlogo.png'
import HTMLlogo from '../assets/HTMLlogo.png'
import CSSlogo from '../assets/CSS3logo.png'
import TWlogo from '../assets/TWlogo.png'
import JSlogo from '../assets/JSlogo.png'
import { motion } from 'framer-motion'
import useMediaQuery from '../hooks/useMediaQuery'
import Skill from '../components/Skill'

const MySkills = () => {
  const IsAboutXSmallScreen = useMediaQuery("(min-width: 1060px)")

  return (
    <section id="skills"  
        className='flex flex-col justify-center items-center mt-[20px] md:mt-[50px]'
        >
        { IsAboutXSmallScreen ? (
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
                <h2 className='text-6xl'>My Skills</h2>
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
              <Skill smW={"sm:w-[200px]"} smH={"sm:h-[200px]"} hover={"hover:shadow-sky-700"} img={HTMLlogo} alt="Image_HTML" wImg={"w-[160px]"} zImg={"z-10"}/>
              <Skill smW={"sm:w-[200px]"} smH={"sm:h-[200px]"} hover={"hover:shadow-sky-700"} img={CSSlogo} alt="Image_CSS3" wImg={"w-[115px]"} zImg={"z-10"}/>           
              <Skill smW={"sm:w-[200px]"} smH={"sm:h-[200px]"} hover={"hover:shadow-sky-700"} img={JSlogo} alt="Image_JS" wImg={"w-[140px]"} zImg={"z-10"}/>        
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
              <Skill smW={"sm:w-[200px]"} smH={"sm:h-[200px]"} hover={"hover:shadow-sky-700"} img={RClogo} alt="Image_REACT" wImg={"w-[150px]"} zImg={"z-10"}/>           
              <Skill smW={"sm:w-[200px]"} smH={"sm:h-[200px]"} hover={"hover:shadow-sky-700"} img={TWlogo} alt="Image_TAILWIND" wImg={"w-[150px]"} zImg={"z-10"}/>              
              <Skill smW={"sm:w-[200px]"} smH={"sm:h-[200px]"} hover={"hover:shadow-sky-700"} img={FBlogo} alt="Image_FIREBASE" wImg={"w-[80px]"} zImg={"z-10"}/>              
            </div>
            </motion.div>
          </div> )
          : (            
            <div className='flex flex-col items-center'>
{/*When Not About XS Screen, view skills order HTML, CSS3, JS, REACT, TAILWIND, FIREBASE*/}
                <div className='flex justify-center mb-12'>  
                  <h2 className='text-6xl'>My Skills</h2>
                </div>
              <div className='flex flex-wrap justify-center gap-7'>
                <Skill divW={"w-[120px]"} divH={"h-[120px]"} smW={"sm:w-[200px]"} smH={"sm:h-[200px]"} img={HTMLlogo} alt="Image_HTML" wImg={"w-[80px]"} smIMG={"h-[160px]"} zImg={"z-10"}/>
                <Skill divW={"w-[120px]"} divH={"h-[120px]"} smW={"sm:w-[200px]"} smH={"sm:h-[200px]"} img={CSSlogo} alt="Image_CSS3" wImg={"w-[55px]"} smIMG={"h-[115px]"} zImg={"z-10"}/>
                <Skill divW={"w-[120px]"} divH={"h-[120px]"} smW={"sm:w-[200px]"} smH={"sm:h-[200px]"} img={JSlogo} alt="Image_JS" wImg={"w-[70px]"} smIMG={"h-[140px]"} zImg={"z-10"}/>
                <Skill divW={"w-[120px]"} divH={"h-[120px]"} smW={"sm:w-[200px]"} smH={"sm:h-[200px]"} img={RClogo} alt="Image_REACT" wImg={"w-[75px]"} smIMG={"h-[150px]"} zImg={"z-10"}/>
                <Skill divW={"w-[120px]"} divH={"h-[120px]"} smW={"sm:w-[200px]"} smH={"sm:h-[200px]"} img={TWlogo} alt="Image_TAILWIND" wImg={"w-[75px]"} smIMG={"h-[150px]"} zImg={"z-10"}/>
                <Skill divW={"w-[120px]"} divH={"h-[120px]"} smW={"sm:w-[200px]"} smH={"sm:h-[200px]"} img={FBlogo} alt="Image_FIREBASE" wImg={"w-[40px]"} smIMG={"h-[80px]"} zImg={"z-10"}/>
              </div>  
            </div>
          )}
    </section>
  )
}

export default MySkills
