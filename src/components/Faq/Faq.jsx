import React, { useState } from 'react';
import CollapsibleFaq from './CollapsibleFaq';

export default function Faq() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleFaq1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
  };

  const toggleFaq2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen1(false);
  };
  const toggleFaq3 = () => {
    setIsOpen3(!isOpen3);
    setIsOpen1(false);
    setIsOpen2(false);
  };
  const toggleFaq4 = () => {
    setIsOpen4(!isOpen4);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
  };

  return (
    <>
    <div className='pb-4 mt-8'>
      <h1 className="text-center text-gray-700 text-3xl font-bold my-4 hover:scale-105">FAQ</h1>
 <CollapsibleFaq
        title="Are there any age restrictions?"
        content="Yes, there are age restrictions when renting a vehicle with us. To rent a standard vehicle, you must be at least 21 years old. However, please note that age requirements can vary depending on the type of vehicle you wish to rent. We recommend checking with our team to confirm the age restrictions for your specific rental."
        isOpen={isOpen1}
        toggleFaq={toggleFaq1}
      />

      <CollapsibleFaq
        title="Do i need a deposit to rent a vehicle?"
        content="Yes, a deposit is required when renting a vehicle from our company. The deposit amount may differ depending on the vehicle type and rental duration. This deposit helps cover potential damages, fuel charges, or additional fees. We advise inquiring about the deposit amount and our deposit policies when making your reservation."
        isOpen={isOpen2}
        toggleFaq={toggleFaq2}
      />
      <CollapsibleFaq
        title="Will any other fees apply?"
        content="In addition to the rental fee and deposit, there may be additional fees associated with your rental:
        Fuel charges: You are responsible for returning the vehicle with the same level of fuel as when you received it.
        Insurance: We offer optional insurance coverage for an additional fee to provide protection in case of accidents or damage.
        Additional drivers: If you plan to have multiple drivers, there may be an extra fee to add them to the rental agreement.
        Young driver surcharge: A surcharge may apply if you are under a certain age (typically under 25).
        Toll charges: Any toll road usage may result in additional charges.
        We recommend reviewing your rental agreement and discussing potential additional fees with our team when booking your vehicle."
        isOpen={isOpen3}
        toggleFaq={toggleFaq3}
      />
      <CollapsibleFaq
        title="Documents required to rent a vehicle"
        content="The required documents may vary based on your residency status. Here are the typical document requirements:
        For Tourists visiting Canada:
        Copy of Passport
        International Driving License
        Copy of Visit Visa/Visa Stamp
        For Canadian Residents:
        Copy of Passport
        Canadian Driving License
        Please keep in mind that these are general guidelines, and our specific document requirements may vary. We suggest confirming the exact document requirements with our rental team to ensure a smooth rental process."
        isOpen={isOpen4}
        toggleFaq={toggleFaq4}
      />
      </div>
    </>
  );
}
