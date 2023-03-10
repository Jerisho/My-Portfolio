import React from 'react'

const Skill = ({ divW, divH, smW, smH, hover, img, alt, wImg, smIMG, zImg, }) => {
  return (
    <div className={`flex justify-center items-center ${divW} ${divH} ${smW} ${smH} z-15 rounded-tl-3xl rounded-br-3xl
     bg-icon-blue hover:shadow-custom ${hover}`}>
        <img src={img} alt={alt} className={`${wImg} sm:w-[${smIMG}] ${zImg}`}></img>
    </div>
  )
}

export default Skill