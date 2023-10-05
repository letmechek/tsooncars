import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'; // Import the shopping cart icon

function CartIcon() {
  // const cartItemCount = 3; 

  return (
    <div className="relative top-0 right-0 ">
      <Link to="/cart">
        <div className="relative">
          <ShoppingCartIcon className="h-8 w-8 text-white hover:text-gray-300" />
          {/* {cartItemCount > 0 && ( */}
            {/* <div className="absolute top-0 right-0 bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center text-xs font-semibold"> */}
              {/* {cartItemCount} */}
            </div>
          {/* )} */}
        {/* </div> */}
      </Link>
      
    </div>
  );
}

export default CartIcon;
