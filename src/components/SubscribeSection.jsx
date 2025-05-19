import React from 'react';

function SubscribeSection() {
  return (
    <section className="bg-white py-20 px-4 flex justify-center">
      <div className="text-center max-w-xl w-full">

        <p className="text-green-600 font-semibold text-sm mb-2 text-xl">SUBSCRIBE</p>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Subscribe To Get The Latest <br /> News About Us
        </h2>

        <p className="text-sm text-gray-500 mb-6">
          Please Drop Your Email Below To Get Daily Update About What We Do
        </p>

        
        <div className="flex items-center border border-gray-400 rounded-2xl overflow-hidden w-full max-w-md mx-auto">
  <input
    type="text"
    placeholder="Enter Your Email Address"
    className="flex-1 px-4 py-4 text-sm text-gray-700 placeholder-gray-500 focus:outline-none"
  />
  <div className="bg-orange-500 text-white text-sm font-medium px-6 py-3 rounded-xl mr-1  cursor-pointer hover:bg-orange-600 transition-all">
    Subscribe
  </div>
</div>

        

      </div>
    </section>
  );
}

export default SubscribeSection;




{/* <form className="flex items-center justify-center">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-3 rounded-r-md hover:bg-orange-600 transition"
          >
            Subscribe
          </button>
        </form> */}