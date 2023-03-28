import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'

const Project = ({ img, alt, title }) => {
  const IsChangeScreen = useMediaQuery("(min-width: 768px)")

  return (
        <>
        { IsChangeScreen ? (
            <div className={`flex flex-col justify-center items-center w-[400px] h-[290px] z-15 rounded-tl-3xl 
            rounded-br-3xl bg-icon-blue hover:shadow-custom hover:shadow-sky-700 cursor-pointer z-10`}>
              <h1 className='font-normal text-3xl mb-[4px]'>{title}</h1>
              <img src={img} alt={alt} className={` w-[500px] blur-xs z-10 mb-[10px]`}></img>
              <div className={"flex flex-row justify-start w-full px-[5px]"}>
                <div className="flex justify-center items-center h-[35px] w-[90px] mr-[5px] bg-amber rounded-[50%]">
                  <p className="font-bold text-xl" >HTML</p>
                </div>                
              </div>
            </div>
            ) : (
            <div className={`flex flex-col justify-center items-center w-[250px] h-[250px] z-15 rounded-tl-3xl rounded-br-3xl
            bg-icon-blue}`}>
              <h1 className='font-normal text-3xl mb-[4px]'>{title}</h1>
              <img src={img} alt={alt} className={` w-[300px] blur-xs z-10`}></img>
              <div className={"flex flex-row justify-start w-full px-[5px]"}>
                <div className="flex justify-center items-center h-[35px] w-[90px] mr-[5px] bg-amber rounded-[50%]">
                  <p className="font-bold text-xl" >HTML</p>
                </div>                
              </div>
            </div>
            )}
       </>
        
  )
}

export default Project