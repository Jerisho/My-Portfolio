import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const SocialMediIdons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
        <a className='hover:opacity-50 transition duration-500'
        href="https://www.github.com/Jerisho"
        target="_blank"
        rel="noreferrer">
        <BsGithub className='text-3xl'/>   
        </a>
        <a className='hover:opacity-50 transition duration-500'
        href="https://www.linkedin.com/in/jeremias-godoy/"
        target="_blank"
        rel="noreferrer">
        <BsLinkedin className='text-3xl'/>
        </a>
        <a className='hover:opacity-50 transition duration-500'
        href="https://www.instagram.com/ljerishol/"
        target="_blank"
        rel="noreferrer">
        <BsInstagram className='text-3xl'/>
        </a>
    </div>
  )
}

export default SocialMediIdons