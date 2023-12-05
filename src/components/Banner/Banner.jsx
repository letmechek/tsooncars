import bannerImage from '../../Assets/images/banner23.jpeg'
import ScrollReveal from "scrollreveal";


export default function Banner() {
    return  (
        <>
  <div className="relative scroll">
  <img src={bannerImage} alt="home" className="w-full h-auto object-cover" />
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className="z-10 space-x-4 text-center">
          <h1 className="text-4xl font-extrabold mb-4 font-cool">Luxury Car Rentals</h1>
          <p className="text-2xl font-semibold mb-6 font-cool">Experience the Best in Class</p>
          <button
            className="bg-white hover:bg-custom-yellow hover:text-white text-black font-bold py-2 px-4 rounded"
            onClick={() => {
              window.location.href = 'tel:+1234567890';
            }}
          >
            Call Us
          </button>
          <button className="bg-custom-yellow hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded">
            Book Now
          </button>
        </div>
      </div>
    </div>
</>

    )
}
