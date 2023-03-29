import React from 'react'

const Tech = ({ img, alt }) => {
  return (
    <>
      <img className='w-[40px] h-[40px] mx-1' src={`${img}`} alt={`${alt}`} />
    </>
  )
}

export default Tech