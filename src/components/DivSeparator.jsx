import React from 'react'

const DivSeparator = ({width = "w-full", id}) => {
  return  <div id={id} className={`h-0.5 ${width} bg-amber`}></div>
  
}

export default DivSeparator