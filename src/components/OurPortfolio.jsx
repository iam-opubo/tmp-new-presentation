import React from 'react';

function OurPortfolio() {
  return (
    <div className="bg-white pt-16">
      <div className="w-380 mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-20">
          <p className="text-green-600 font-semibold text-sm mb-2 font-poppins">OUR PORTFOLIO</p>
          <h2 className="text-2xl md:text3xl font-semibold font-poppins mt-7">
            We provide the Perfect Solution <br className="hidden md:block" />
            to your business growth...
          </h2>
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-30">
          
          {/* Project 1 */}
          <div>
            <img src="img/marketing agency 1.png" alt="marketing agency 1" className="w-165 mb-4" />
            <h1 className="font-semibold text-[23px] text-lg mb-6 mt-8 font-Poppins">Digital Marketing Agency Website</h1>
            <p className="text-gray-600 text-[17px] text-sm">
              This is a website for a client who want to achieve their goals and meet their<br />
              users needs while also increasing their reach. Across all platforms. This is a<br /> website rebrand
            </p>
          </div>

          {/* Project 2 */}
          <div>
            <img src="img/marketing agency 2.png" alt="marketing agency 2" className="w-150 mb-4" />
            <h1 className="font-semibold text-[23px] text-lg mb-6 mt-8">Marketing Agency Website</h1>
            <p className="text-gray-600 text-[17px] text-sm">
              This is a website for a client who want to achieve their goals and meet their<br />
              users needs while also increasing their reach. Across all platforms. This is a<br /> website rebrand
            </p>
          </div>

          {/* Project 3 */}
          <div className='mt-[-150px]'>
            <img src="img/marketing agency 3.png" alt="marketing agency 3" className="w-165 mb-4" />
            <h1 className="font-semibold text-[23px] text-lg mb-4 mt-8">Statistical Marketing Website</h1>
            <p className="text-gray-600 text-[17px] text-sm">
              This is a website for a client who want to achieve their goals and meet their<br />
              users needs while also increasing their reach. Across all platforms. This is a<br /> 
              website rebrand
            </p>
          </div>

          {/* Project 4 */}
          <div className='mt-25'>
            <img src="img/marketing agency 4.png" alt="marketing agency 4" className="w-150 mb-4" />
            <h1 className="font-semibold text-[23px] text-lg mb-4 mt-12 font-Poppins">Digital Multi-Marketing Agency Website</h1>
            <p className="text-gray-600 text-[17px] text-sm">
              This is a website for a client who want to achieve their goals and meet their<br />
              users needs while also increasing their reach. Across all platforms. This is a<br /> website rebrand
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OurPortfolio;