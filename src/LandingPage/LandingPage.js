import React  from 'react';
import Slider from 'react-slick';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
const LandingPage = () => {

  return (
    <div>
  
  <section className="flex items-center justify-center min-h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url(https://static.zollege.in/public/college_data/images/campusimage/1476436431AN2.jpg)' }}>
  <div className="absolute inset-0 bg-blue-900 opacity-75"></div>
  <div className="relative z-10 text-center text-white">
    <h1 className="text-6xl font-bold mb-6">Asansol Engineering College Fest 2023</h1>
    <h2 className="text-3xl mb-10">Sponsored By: Thrivers Wagmi</h2>
    <p className="text-5xl font-bold mb-4">Date: 27th &amp; 28th May</p>
    <p className="text-lg mb-10 text-center px-8 sm:px-40">Confirm your registration to get food coupons and to join officially. Fest T-shirts are available on the webpage. To purchase, simply scroll down. After completing registration, you will receive a unique QR code as your pass. YOU'RE WELCOME</p>
    <button className="px-6 py-3 text-lg bg-blue-500 font-bold text-white rounded-full uppercase shadow-lg hover:bg-blue-600 mb-5"> 
    <Link to="/registration">
     Register Now
    </Link>
    </button>
    
  </div>
  <style jsx>{`
    @media (max-width: 640px) {
      .bg-blue-900.opacity-75 {
        opacity: .75;
      }
    }
  `}</style>
</section>





    </div>
  );
};

export default LandingPage;
