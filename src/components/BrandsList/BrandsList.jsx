import React from 'react';
import {Link} from 'react-router-dom'

export default function BrandsList({ cat }) {
return (
  <Link to={`/model/${cat._id}`}>
  <div
    className="m-4 flex flex-col items-center justify-center pt-4 hover:scale-105">
    <div className="bg-white pr-7 pl-7 p-4 m-2 shadow-xl rounded-lg flex justify-center items-center ">
      <img src={cat.image} alt={cat.name} className="w-full h-full object-contain" />
    </div>
  </div>
  </Link>
);
}