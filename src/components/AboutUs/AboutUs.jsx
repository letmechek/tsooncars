import React from 'react';
import ProfileBanner from '../Banner/ProfileBanners'
import banner2 from '../../Assets/images/banner2.jpeg'

function AboutUs() {
  return (
    <>
    <ProfileBanner image={banner2} title='About Us' />
    <div className="bg-gray-100">

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
    </>
  );
}

export default AboutUs;