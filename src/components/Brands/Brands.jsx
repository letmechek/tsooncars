import react from 'react'
import { Link } from 'react-router-dom'
export default function Brands({vehicleModels, activeCat, setActiveCat,categories}){
// const cat = vehicleModels.map((cat, index) => (
//     <button
//         key={index}
//         onClick={() => setActiveCat(cat)}
//         className={`text-lg font-semibold px-4 py-2 rounded-md mx-2 hover:bg-gray-200 ${
//             activeCat === cat && 'bg-gray-200'
//         }`}
//     >
//         ({cat})
//     </button>
// ))
return (
    <div >
      <h2 className="text-center text-gray-700 text-3xl font-bold my-4 hover:scale-105 ">BRANDS</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 justify-center ">
        {categories.map((category, index) => (
            <Link to={`/brands/${category.name}`} key={category._id}>
          <div key={index} className="bg-white p-4 m-4 shadow-xl rounded-lg flex justify-center items-center hover:scale-105">
            <img src={category.image} alt={category.name} className=" h-auto object-contain max-w-[40%]" />
          </div>
            </Link>
        ))}
      </div>
    </div>
  );
}