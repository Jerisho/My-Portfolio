import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Certificate from '../components/Certificate'
import CJs from '../assets/CJs.png'
import CReact from '../assets/CReact.png'
import CNode from '../assets/CNode.png'
import useObserver from '../hooks/useObserver'
const Certificates = () => {
    const [selectedCer, setSelectedCer] = useState(false)
    const [isModalActive, setIsModalActive] = useState(false)
    const container = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.2 }
        }
    }

    {/*FUNCTION MODAL*/}


    return (
        <section id='certificates' 
            className='flex flex-col h-full items-center justify-center py-[45px]'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport= {{once: true, amount: 0.5}}
                transition={{ duration: 1 }}
                variants={{
                    hidden: { opacity: 0, x: 0},
                    visible: { opacity: 1, x: 0},
                }}
                className="flex md:w-[640px] h-[0.5px] mb-[100px] justify-center items-center border border-aqua border-dashed"
            >
                <div className='flex h-full justify-center items-center bg-deep-blue'>  
                    <h2 className='font-yellowtail text-5xl sm:text-6xl px-[20px] pr-[30px] bg-deep-blue'>Certificates</h2>
                </div>
            </motion.div>
            <div className="flex h-4/6 justify-center items-center">
                <div className='flex flex-wrap justify-center items-start w-full h-full mb-5 gap-10'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport= {{once: true, amount: 0.8}}
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, y: -40},
                            visible: { opacity: 1, y: 0}  
                    }}>
                        <Certificate img={CJs} alt={"Curso Javascript - CoderHouse"} setSelectedCer={setSelectedCer} setIsModalActive={setIsModalActive}/>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport= {{once: true, amount: 0.8}}
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, y: 0},
                            visible: { opacity: 1, y: 0}  
                    }}> 
                        <Certificate img={CNode} alt={"Curso React JS - CoderHouse"} setSelectedCer={setSelectedCer} setIsModalActive={setIsModalActive} xMove={200}/>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport= {{once: true, amount: 0.8}}
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, y: 40},
                            visible: { opacity: 1, y: 0}  
                    }}> 
                        <Certificate img={CReact} alt={"Curso React JS - CoderHouse"} setSelectedCer={setSelectedCer} setIsModalActive={setIsModalActive} xMove={200}/>
                    </motion.div>
                </div>
            </div>
            {/*MODAL IMG */}
            <div className={`${isModalActive ? "flex" : "hidden"} fixed top-0 left-0 z-50 w-screen h-screen bg-black/70 justify-center items-center`}>
                <a 
                    className='fixed z-[10] top-[100px] right-8 text-white text-5xl font-bold hover:text-amber' 
                    href='javascript:void(0)'
                    onClick={() => setIsModalActive(false)}>
                    x </a>
                <div className='overflow-x-auto snap-x'>
                    <div className='snap-center'>
                        <img src={selectedCer} alt="" className=' max-w-[700px] md:max-w-[900px] max-h-[600px] object-cover' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certificates