import React from 'react'
import bannerImage from '../../Assets/images/banner2.jpeg'

function AboutUsBanner({image, title}) {
  return (
    <>
    <div className="relative scroll bg-gray-100">
    <div className="absolute inset-0 bg-white opacity-30"></div>
  <img src={image} alt="home" className="w-full h-80 object-cover " style={{ borderBottomLeftRadius: '3rem', borderBottomRightRadius: '3rem' }} />
      <div className="absolute inset-0 flex items-center justify-center text-white">
      <div className="absolute inset-0 flex items-center pt-24 justify-start text-white p-6">

          <h1 className="text-5xl font-bold  font-cool ">{title}</h1>
        </div>
      </div>
      </div>
</>
  )
}

export default AboutUsBanner