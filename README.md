# TSoon Luxury Cars Website

Welcome to the TSoon Luxury Cars website, a platform where you can explore and rent the finest luxury cars. This website is built using the MERN stack (MongoDB, Express, React, Node.js) and incorporates Tailwind CSS for styling and Stripe for secure online payments.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Stripe Integration](#stripe-integration)

## Features

- Browse a stunning collection of luxury cars.
- View detailed information, images, and specifications for each car.
- User authentication and registration.
- Secure online payments with Stripe.
- Add cars to your shopping cart.

## Technologies

- **MERN Stack**:
  - MongoDB for the database.
  - Express.js for the server.
  - React for the frontend.
  - Node.js for server-side JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for responsive and stylish design.
- **Stripe**: Securely process payments and handle transactions.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone [https://github.com/your-username/tsoon-luxury-cars.git]    (https://github.com/letmechek/tsooncars.git)
   cd tsoon-luxury-cars
# Install  dependencies
npm install

## Set Up Environment Variables:

Create a .env file in the server directory to store sensitive information such as the MongoDB URI and Stripe API keys.

## Start the Application:
# Start the server
nodemon server

# Start the client
npm start

## Usage
Visit http://localhost:3000 to access the TSoon Luxury Cars website.
## Stripe Integration
This website integrates Stripe for processing payments. To configure Stripe for your project:

Create a Stripe account and obtain API keys.
Add your Stripe API keys to the .env file in the server directory.
Example .env file (replace your_key_here with your actual keys):

STRIPE_SECRET_KEY=your_secret_key_here
STRIPE_PUBLISHABLE_KEY=your_publishable_key_here
