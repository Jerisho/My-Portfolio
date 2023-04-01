import React, { useEffect, useState} from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import Tech from './Tech'
import DivSeparator from './DivSeparator'
const Project = ({ img, alt, title, technology }) => {
  const IsChangeScreen = useMediaQuery("(min-width: 768px)")
  const [tech, setTech] = useState([])
  useEffect(() => {
    setTech(technology)
  }, [technology])
  return (
        <>
        { IsChangeScreen ? (
            <div className={`flex flex-col justify-center items-center w-[400px] h-[290px] z-15 rounded-tl-3xl 
                            rounded-br-3xl bg-icon-blue 
                            hover:shadow-custom hover:shadow-sky-700 cursor-pointer z-10`}>
              <h1 className='font-normal text-3xl mb-[4px]'>{title}</h1>
              <DivSeparator/>
              <img src={img} alt={alt} className={` w-[500px] blur-xs z-10 mb-[10px]`}></img>
              <div className={"flex flex-row justify-center w-full px-[5px]"}>
                {tech.map((i => 
                    <Tech
                      key = {i.id}
                      img = {i.img}
                      alt = {i.alt}
                      wd = {i.wd}
                    />
                  ))}             
              </div>
            </div>
            ) : (
            <div className={`flex flex-col justify-center items-center w-[250px] h-[207x] 
            py-[5px] z-15 rounded-tl-3xl rounded-br-3xl rounded-bl-lg rounded-tr-lg bg-icon-blue`}>
              <h1 className='font-normal text-2xl mb-[4px]'>{title}</h1>
              <DivSeparator/>
              <img src={img} alt={alt} className={`w-[300px] blur-xs z-10 mb-[10px]`}></img>
              <div className={"flex flex-row justify-center w-full px-[5px]"}>
              {tech.map((i => 
                  <Tech
                    key = {i.id}
                    img = {i.img}
                    alt = {i.alt}
                    wd = {i.wd}
                  />
                ))}             
              </div>
            </div>
            )}
       </>
        
  )
}

export default Project