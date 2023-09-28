import react from 'react'
import { Link } from 'react-router-dom'
export default function Brands({vehicleModels, activeCat, setActiveCat,categories}){
const cat = categories.map((cat, index) => (
  <>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 justify-center ">
    <div
        key={index}
        onClick={() => setActiveCat(cat)}
        className={` ${
            activeCat === cat && 'bg-gray-200'
        }`}
    >
         <div  className="bg-white p-4 m-4 shadow-xl rounded-lg flex justify-center items-center hover:scale-105">
            <img src={cat} alt={cat.name} className=" h-auto object-contain max-w-[40%]" />
          </div>
    </div>
    </div>
    </>
))
return (
    <div >
      <h2 className="text-center text-gray-700 text-3xl font-bold my-4 hover:scale-105 ">BRANDS</h2>
      {cat}
    </div>
  );
}
         


