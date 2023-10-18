import React, { useEffect} from 'react';
import {Link} from 'react-router-dom'
import ScrollReveal from "scrollreveal";

export default function BrandsList({ cat }) {
  const sr = ScrollReveal();
  useEffect(() => {
    sr.reveal(".scroll", {
      origin: "bottom",
      distance: "20px",
      duration: 1000,
      delay: 200,
      scale: 1,
    });
  }, []);
return (
  <Link to={`/model/${cat._id}`}>
  <div
    className="scroll m-4 flex flex-col items-center justify-center pt-1 hover:scale-105">
    <div className="bg-white pr-7 pl-7 p-4 m-2 shadow-xl rounded-lg flex justify-center items-center w-34 sm:w-42 ">
      <img src={cat.image} alt={cat.name} className="w-full h-full object-contain" />
    </div>
  </div>
  </Link>
);
}