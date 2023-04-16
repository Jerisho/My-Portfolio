import React from 'react'
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';

const Contact = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    const {register , trigger,formState: {errors}} = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid){
            e.preventDefault()
        }
}
    return (
    <section id="contact" className='py-[45px] h-full'>
        {/* HEADING */}
        <div className='flex text-center items-center h-[68px] flex-col mt-[30px] mb-[60px] md:text-start relative'>
            <div className='flex text-center items-center w-[240px] md:[400px] h-[68px] flex-col md:text-start relative'>
                <p className='font-yellowtail text-3xl sm:text-6xl text-bold w-[200px] sm:w-[245px] sm:left-[-145px] bg-deep-blue absolute z-30'>Contact Me</p>
                <div className='w-[313px] md:w-[440px] h-[48px] border-dotted border-2 border-aqua top-[18px] sm:top-[30px] absolute z-20'></div>
                <p className='font-opensans italic text-s sm:text-l w-[180px] sm:w-[190px] sm:px-[5px] top-[63px] sm:left-[178px]  bg-deep-blue absolute z-30 '>You are can contact me</p>
            </div>
        </div>

        {/*FORM - IMG*/}
        <div className='flex md:flex md:flex-row md:justify-between gap-16 mt-5'>
            { isAboveMediumScreens ? ( <div className='w-[600px] h-auto flex items-center justify-center bg-imgContact bg-cover'></div>) : ( <> </>) }
            <form
                target='_blank'
                onSubmit={onSubmit}
                action="https://formsubmit.co/93bee6ae42d55a59a481149510d4a3ea"
                method='POST'
                className='md:w-4/6'
            >
                <input 
                    className='w-full bg-icon-blue font-semibold placeholder-opaque-black p-3 mb-5'
                    type="text" 
                    placeholder='NAME'
                    {...register("name", {
                        required: true,
                        maxLength: 30,
                    })}
                />
                {errors.name && (
                    <div className='w-full'>
                        <p className='text-red mt-1'>
                            {errors.name.type === "required" && "This field is required."}
                            {errors.name.type === "maxLenght" && "Max length is 50 char."}
                        </p>
                    </div>
                )}    
                <input 
                    className='w-full bg-icon-blue font-semibold placeholder-opaque-black p-3'
                    type="text"
                    placeholder='EMAIL'
                    {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })} />
                    {errors.email && (
                        <div className=''>
                            <p className='text-red mt-1 w-full'>
                                {errors.email.type === "required" && "This field is requiered."}
                                {errors.email.type === "pattern" && "Invalid email addres"}
                            </p>
                        </div>
                    )}

                <textarea 
                className='w-full resize-none h-[300px] bg-icon-blue font-semibold text- placeholder-opaque-black p-3 mt-5'
                type="text" 
                placeholder='MESSAGE'
                rows='4'
                cols='50'
                {...register("message",{
                    required: true,
                    maxLength: 2000
                })}
                />
                {errors.message && (
                    <div className=''>
                        <p className='text-red mt-1'>
                            {errors.message.type === "required" && "This field is requiered."}
                            {errors.message.type === "maxLength" && "Max length is 2000 char"}
                        </p>
                    </div>
                )}

                <button
                className=' w-full mt-5 p-3 bg-amber hover:bg-aqua transition duration-500 '
                type="submit">
                    Send
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact