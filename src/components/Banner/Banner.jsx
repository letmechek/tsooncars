import { Link } from 'react-router-dom';
import bannerImage from '../../Assets/images/banner.png'
import ScrollReveal from "scrollreveal";


export default function Banner() {
    return  (
        <>
  <div className="relative scroll">
    <img
      src={bannerImage}
      alt="home"
      className="w-full h-auto object-contain"
    />
    <div className="absolute inset-x-0 bottom-10 flex items-center justify-center text-white">
      <Link to='/products'className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded hover:text-black hover:scale-105">
        Shop Now
      </Link>
    </div>
  </div>
</>

    )
}
