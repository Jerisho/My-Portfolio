import React from 'react'

const Tech = ({ img, alt, wd }) => {
  return (
    <>
      <img className={`${wd} h-[35px] mx-1`} src={`${img}`} alt={`${alt}`} />
    </>
  )
}

export default Tech