import React from 'react'
import  { ReactTyped } from "react-typed"
function Hero({HomeRef}) {
  return (
    <div className='Hero' ref={HomeRef}>
       <div className="text">
           <h1>Hi, Im Mohamed</h1>
      <ReactTyped
        strings={[
          
          'Front-End Developer',
          'React Developer',
          'UI Designer',
        ]}
        typeSpeed={80}
        backSpeed={100}
        loop
        className='myTyped'
      />
       </div>
    </div>
  )
}

export default Hero