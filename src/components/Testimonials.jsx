import React from 'react';

function Testimonials() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="w-370 mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="text-left mb-6 md:mb-0">
            <p className="text-green-600 text-sm font-semibold">TESTIMONIALS</p>
            <h2 className="text-2xl md:text-3xl font-bold">
              See What Our Customer <br /> Say About Us
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-6">
            <div className="w-24 h-24 bg-white rounded-[100px] border-3 border-black flex items-center justify-center">
              <img src="img/Vector left.png" alt="left pointer" className="mt-3" />
            </div>

            <div className="w-24 h-24 bg-[#D7F5DC] rounded-[100px] flex items-center justify-center">
              <img src="img/Vector right.png" alt="right pointer" className="mt-2" />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="mt-10 p-6 bg-white rounded-xl shadow-md">
            <p className="text-base text-gray-800">
              Thank You for your service. I am very pleased<br />
              with the result. I have seen exponential growth<br />
              in my business and it's all thanks to your<br />
              amazing service.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src="/img/mrs Emily.png"
                  alt="Emily Stones"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="font-semibold text-black">Emily Stones</h1>
                <p className="text-sm text-gray-600">CEO, Marketing Guru</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="mt-10 p-6 bg-white rounded-xl shadow-md">
            <p className="text-base text-gray-800">
              Thank You for your service. I am very pleased<br />
              with the result. I have seen exponential growth<br />
              in my business and it's all thanks to your<br />
              amazing service.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src="/img/mrs Emily.png"
                  alt="Emily Stones"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="font-semibold text-black">Emily Stones</h1>
                <p className="text-sm text-gray-600">CEO, Marketing Guru</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="mt-10 p-6 bg-white rounded-xl shadow-md">
            <p className="text-base text-gray-800">
              Thank You for your service. I am very pleased<br />
              with the result. I have seen exponential growth<br />
              in my business and it's all thanks to your<br />
              amazing service.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src="/img/mrs Emily.png"
                  alt="Emily Stones"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="font-semibold text-black">Emily Stones</h1>
                <p className="text-sm text-gray-600">CEO, Marketing Guru</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;



// border-4
// border-white


{/* <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
{[1, 2, 3].map((i) => (
  <div
    key={i}
    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
  >
    <p className="text-sm text-gray-700 mb-4">
      Thank you for your service. I am very pleased with the result.
      I have seen exponential growth in my business and it's all thanks to your amazing service.
    </p>
    <div className="flex items-center gap-4 mt-4">
      <img
        src="img/avatar.jpg"
        alt="Client"
        className="h-10 w-10 rounded-full object-cover"
      />
      <div>
        <p className="font-semibold text-sm">Emily Stones</p>
        <p className="text-gray-500 text-xs">CEO, Marketing Guru</p>
      </div>
    </div>
  </div>
))}
</div> */}


                {/* <div className='w-18 h-19 bg-white rounded-[50px] border-1'> */}
                {/* </div> */}

