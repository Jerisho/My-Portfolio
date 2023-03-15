import React from 'react'

const ContainerDetail = ({ divW, divH, smW, smH, blur, hover, hoverCursor, img, alt, wImg, smIMG, zImg, }) => {
  return (
    <div className={`flex  justify-center items-center ${divW} ${divH} ${smW} ${smH} z-15 rounded-tl-3xl rounded-br-3xl
     bg-icon-blue hover:shadow-custom ${hover} ${hoverCursor}`}>
        <img src={img} alt={alt} className={` ${wImg} ${blur} ${smIMG} ${zImg}`}></img>
    </div>
  )
}

export default ContainerDetail