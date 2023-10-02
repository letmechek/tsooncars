import React from 'react';

function AboutUs() {
  return (
    <div className="bg-gray-100">
      <header className="bg-black text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">About Tsoon Cars</h1>
          <p className="text-sm">Luxury Car Rental in Toronto</p>
        </div>
      </header>

      <section className="py-8 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Tsoon Cars was founded with a passion for luxury automobiles and a desire to share that passion with others. Our journey began in the heart of Toronto, where we recognized the demand for premium car rentals. Today, we are proud to offer an exceptional fleet of luxury vehicles and unmatched service to our valued customers.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to provide an unforgettable driving experience that goes beyond just renting a car. We aim to deliver luxury, comfort, and style to every customer, ensuring that their journey with Tsoon Cars is nothing short of extraordinary. Whether it's for a special occasion, a business trip, or simply a desire to indulge in luxury, we are here to make it happen.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;