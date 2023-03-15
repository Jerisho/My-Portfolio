import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import ContainerDetail from '../components/ContainerDetail'
import Project1 from '../assets/Project1.png'
import Project2 from '../assets/Project2.png'
import Project3 from '../assets/Project3.png'
const Projects = () => {

    const IsAboutXSmallScreen = useMediaQuery("(min-width: 768)")

  return (
    <section id="projects"
        className='flex flex-col h-auto justify-center items-center mt-[20px] mb-[20px]'>
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
                <ContainerDetail divW={"w-[250px]"} divH={"h-[230px]"} smW={"sm:w-[400px]"} smH={"sm:h-[290px]"} blur={"blur-xs"} hover={"hover:shadow-sky-700"} hoverCursor={'cursor-pointer'} img={Project1} alt="Project_LoL" wImg={"w-auto"} smIMG={"w-[500px]"} zImg={"z-10"}/>
                <ContainerDetail divW={"w-[250px]"} divH={"h-[230px]"} smW={"sm:w-[400px]"} smH={"sm:h-[290px]"} blur={"blur-xs"} hover={"hover:shadow-sky-700"} hoverCursor={'cursor-pointer'} img={Project2} alt="Project_EcommerceJS" wImg={"w-[300px]"} smIMG={"w-[500px]"} zImg={"z-10"}/>
                <ContainerDetail divW={"w-[250px]"} divH={"h-[230px]"} smW={"sm:w-[400px]"} smH={"sm:h-[290px]"} blur={"blur-xs"} hover={"hover:shadow-sky-700"} hoverCursor={'cursor-pointer'} img={Project3} alt="Project_EcommerceReact" wImg={"w-[300px]"} smIMG={"w-[500px]"} zImg={"z-10"}/>
            </div>
        </motion.div>
    </section>
  )
}

export default Projects