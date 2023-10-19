import React from 'react';
import { Link } from 'react-router-dom';

function Cancel() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-md max-w-md w-full text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          className="mx-auto mb-4 text-red-500"
        >
          <path
            fill="none"
            d="M0 0h24v24H0z"
          />
          <path
            fill="none"
            d="M0 0h24v24H0z"
          />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-10h2v6h-2zm0 6h2v2h-2z"
            fill="currentColor"
          />
        </svg>
        <h2 className="text-2xl font-semibold mb-4">Payment Cancelled</h2>
        <p className="text-gray-600 mb-4">Your payment was cancelled. If you need assistance, please contact support.</p>
        <Link to='/' className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default Cancel;
