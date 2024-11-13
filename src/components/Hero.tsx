import React from 'react'
import Navbar from "@/components/Navbar";

const Hero = () => {
  return (
    <div className='bg-container'>
        <Navbar />
        <h1 className='txt-h1'>Plane your Trip With Treavel Hous</h1>
        <p className='para'>The best treavel of the Journey respectful of the environment.</p>
        <button className='btn'>Explore More</button>
    </div>
  )
}

export default Hero
