import React from 'react';
import BrandsList from '../BrandsList/BrandsList';

export default function Brands({activeCat, categories }) {
  return (
    <div>
      <h1 className="text-center text-gray-700 text-3xl font-bold my-4 hover:scale-105">Brands</h1>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-center scale-100">
      {categories.map((cat, index) => (
        <div
        key={cat._id}
        className={` ${
          activeCat === cat && 'm-2'
        }`}
        >
          <BrandsList cat={cat}  />
        </div>
      ))}
    </div>
    </div>
  );
}

