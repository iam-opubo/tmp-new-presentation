import React from 'react'

function WhatWeDo() {
  return (
    <div>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-left mb-12">
            <p className="text-green-600 font-semibold mb-2 text-sm">WHAT WE DO</p>
            <h2 className="text-[24px] md:text-[30px] font-bold font-poppins leading-snug">
              We provide the Perfect Solution <br className="hidden md:block" />
              to your business growth
            </h2>
          </div>

          {/* Cards */}
          <div className="flex flex-col md:flex-row gap-10 justify-center md:justify-between items-center md:items-stretch">
            
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center max-w-xs w-full">
              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <img src="img/Activity.png" alt="Grow Business" className="h-10 w-10 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Grow Your Business</h3>
              <p className="text-gray-600 mb-4 px-4 md:px-0">
                We help identify the best ways to improve your business
              </p>
              <a href="#" className="text-black font-semibold flex items-center gap-2 hover:underline">
                Learn More <span>→</span>
              </a>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center max-w-xs w-full">
              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <img src="img/Heart.png" alt="Improve Brand Loyalty" className="h-10 w-10 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Improve brand loyalty</h3>
              <p className="text-gray-600 mb-4 px-4 md:px-0">
                We help identify the best ways to improve your business
              </p>
              <a href="#" className="text-black font-semibold flex items-center gap-2 hover:underline">
                Learn More <span>→</span>
              </a>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center max-w-xs w-full">
              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <img src="img/Work.png" alt="Improve Business Model" className="h-10 w-10 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Improve Business Model</h3>
              <p className="text-gray-600 mb-4 px-4 md:px-0">
                We help identify the best ways to improve your business
              </p>
              <a href="#" className="text-black font-semibold flex items-center gap-2 hover:underline">
                Learn More <span>→</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default WhatWeDo
