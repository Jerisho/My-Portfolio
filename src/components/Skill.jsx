import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'

const Skill = ({ img, alt, wImg, smIMG}) => {
  const IsChangeScreen = useMediaQuery("(min-width: 768px)")
  
  return (
    <>{IsChangeScreen ? (
        <div className={`flex justify-center items-center w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] z-15 rounded-tl-3xl rounded-br-3xl
        bg-icon-blue hover:shadow-custom hover:shadow-sky-700 transition duration-200`}>
          <img src={img} alt={alt} className={` ${wImg} ${smIMG} z-10`}></img>
        </div>)
    : (
        <div className={`flex justify-center items-center w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] z-15 rounded-tl-3xl rounded-br-3xl
         bg-icon-blue hover:shadow-custom hover:shadow-sky-700`}>
          <img src={img} alt={alt} className={` ${wImg} ${smIMG} z-10`}></img>
        </div>)
    }
    </>
  )
}

export default Skill