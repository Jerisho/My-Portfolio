import { motion } from 'framer-motion'
import React from 'react'
import photoProfile from '../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../hooks/useMediaQuery'
import SocialMediaIcons from '../components/SocialMediaIcons'

const Landing = ({selectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    
    return (
    <section id="home" 
        className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'
    >
        {/* IMAGE SECTION */}
        <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
            {isAboveMediumScreens ? (
                <div className='relative bg-svg bg-cover '>
                    <img src={photoProfile} alt="profile" className='relative z-0 ml-0 before-top-20 before:-left-20
                    before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2
                    before:border-blue before:z-[-1]' />
                </div>
            ) : (
                <div className='relative bg-svg bg-cover '>
                    <img src={photoProfile} alt="profile" className='relative z-0 ml-0 before-top-20 before:-left-20
                    before:rounded-t-[400px] before:w-full before:max-w-[400px]' />
                </div>
            )}
            </div>

            {/* MAIN SECTION */}
            <div className='z-30 basis-2/5 mt-12 md:mt-32'>
                {/* HEADING */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport= {{once: true, amount: 0.5}}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50},
                        visible: { opacity: 1, x: 0}
                    }}
                >
                    <p className='font-opensans text-4xl z10 text-center xs:text-6xl md:text-start'>
                        Jeremias {""}
                    <span className='font-opensans'>
                         Godoy
                    </span>
                    </p>
                    <p className='italic mt-10 mb-7 text-default text-center md:text-start'>
                    Desarrollador Web
                    </p>
                </motion.div>

                {/* CALL TO ACTIONS */}
                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport= {{once: true, amount: 0.5}}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50},
                        visible: { opacity: 1, x: 0}
                    }}
                >
                <AnchorLink
                    className='bg-amber text-deep-blue rounder-sm py-3 px-7 font-semibold
                        hover:text-white transition duration-500'
                    onClick={() => selectedPage("contact")}
                    href="#contact">
                    Contact Me
                </AnchorLink>
                <AnchorLink
                    className='rounded-r-sm bg-amber py-0.5 pr-0.5'
                    onClick={() => selectedPage("contact")}
                    href="#contact">
                    <div
                        className='bg-deep-blue hover:text-amber transition duration-500 w-full h-full flex
                        items-center justify-center px-10'    
                    >
                        Let's talk.
                    </div>
                </AnchorLink>
                </motion.div>
                <motion.div
                className="flex mt-5 justify-center md:justify-start"
                initial="hidden"
                whileInView="visible"
                viewport= {{once: true, amount: 0.5}}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50},
                    visible: { opacity: 1, x: 0}
                }}
                >
                <SocialMediaIcons/>
                </motion.div>
            </div>
    </section>
  )
}

export default Landing