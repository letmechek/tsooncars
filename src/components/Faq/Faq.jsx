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
      <CollapsibleFaq
        title="Are there any age restrictions?"
        content="Clients are required to be in possession of a valid driving license. Driver’s minimum age limit is 18 years and maximum age limit is 65 years."
        isOpen={isOpen1}
        toggleFaq={toggleFaq1}
      />

      <CollapsibleFaq
        title="Do you require a deposit to rent a vehicle?"
        content="Yes. Your deposit type, amount and method of payment will vary by agreement type."
        isOpen={isOpen2}
        toggleFaq={toggleFaq2}
      />
      <CollapsibleFaq
        title="Will any other fees apply?"
        content="No! There is no other fees apply, unless customer wishes to add additional services (e.g. personal driver, urgent exchange, pick up, and other)"
        isOpen={isOpen3}
        toggleFaq={toggleFaq3}
      />
      <CollapsibleFaq
        title="Documents required to hire"
        content="For Tourists visiting Canada

        - Copy of Passport
        
        - International Driving License
        
        - Copy of Visit Visa/ Visa Stamp
        
        For Canadian Residents
        
        - Copy of Passport
        
        - Canadian driving License
        
        "
        isOpen={isOpen4}
        toggleFaq={toggleFaq4}
      />
      </div>
    </>
  );
}
