import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import Project from '../components/Project'
import Project1 from '../assets/Project1.png'
import Project2 from '../assets/Project2.png'
import Project3 from '../assets/Project3.png'

const Projects = () => {
{/* VER PORQUE NO APARECE EL TITULO PROJECT */}
    const IsAboutMediumScreen = useMediaQuery("(min-width: 1060px)")

  return (
    <section id="projects"
        className='flex flex-col h-auto justify-center items-center mt-[20px] mb-[20px]'>
            {IsAboutMediumScreen ? (
            <div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport= {{once: true, amount: 0.5}}
                    transition={{ duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, x: -100},
                        visible: { opacity: 1, x: 0}
                    }}
                >
                    <div className='flex h-full justify-center mb-12 '>  
                        <h2 className='text-6xl'>Projects</h2>
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
                    <div className='flex flex-wrap justify-center w-full h-full mb-5 gap-5'>
                        <Project title={"Lucian Vice - Noticias"}img={Project1} alt="Project_LoL"/>
                        <Project title={"E-commerce Gamer"}img={Project2} alt="Project_EcommerceJS"/>
                        <Project title={"Smartphone Store"}img={Project3} alt="Project_EcommerceReact"/>
                    </div>
                </motion.div> 
            </div> ) 
            :  (     
            <>
            <div className='flex h-full justify-center mb-12 '>  
                <h2 className='text-6xl'>Projects</h2>
            </div>               
            <div className='flex flex-wrap justify-center w-full h-full mb-5 gap-5'>
                <Project title={"Lucian Vice - Noticias"} img={Project1} alt="Project_LoL"/>
                <Project title={"E-commerce Gamer"} img={Project2} alt="Project_EcommerceJS"/>
                <Project title={"Smartphone Store"} img={Project3} alt="Project_EcommerceReact"/>
            </div>
            </>)
        }
    </section>
  )
}

export default Projects