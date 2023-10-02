import bannerImage from '../../Assets/images/banner.png'


export default function Banner() {
    return  (
        <>
  <div className="relative">
    <img src={bannerImage} alt='home' className="w-full h-auto object-cover" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="z-10 space-x-4">
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
