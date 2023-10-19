import React from 'react';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-md max-w-md w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          className="mx-auto mb-4 animate-bounce text-green-500"
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
            d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
            fill="currentColor"
          />
        </svg>
        <h2 className="text-2xl font-semibold mb-4">Payment Successful</h2>
        <p className="text-gray-600 mb-4">Thank you for your payment. Your transaction was successful.</p>
        <Link to='/' className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default Success;

