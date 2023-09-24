import react from 'react'
import audi from '../../Assets/images/brands/audi_1.png'
import bentley from '../../Assets/images/brands/bentley_1.png'
import bmw from '../../Assets/images/brands/bmw.avif.avif.avif'
import cadillac from '../../Assets/images/brands/cadillac.avif.avif.avif'
import ferrari from '../../Assets/images/brands/ferrari.png'
import lamborghini from '../../Assets/images/brands/lamborghini.avif.avif.avif'
import landrover from '../../Assets/images/brands/landrover.avif.avif'
import mclaren from '../../Assets/images/brands/mclaren.webp'
import mercedes from '../../Assets/images/brands/mercedes.png'
import nissan from '../../Assets/images/brands/nissan.avif.avif.avif'
import porshe from '../../Assets/images/brands/porsche.avif.avif.avif'
import rolls from '../../Assets/images/brands/rolls-royce.avif.avif.avif'

export default function Brands(){
const images = [audi, bentley, bmw, cadillac, ferrari, lamborghini, landrover, mclaren, mercedes, nissan, porshe, rolls]

return (
    <div className=''>
      <h2 className="text-center text-3xl font-semibold my-4 ">Choose By Brand</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center ">
        {images.map((image, index) => (
          <div key={index} className="bg-white p-4 m-4 shadow-xl rounded-lg flex justify-center items-center ">
            <img src={image} alt={`Brand ${index}`} className=" h-auto object-contain max-w-[40%]" />
          </div>
        ))}
      </div>
    </div>
  );
}