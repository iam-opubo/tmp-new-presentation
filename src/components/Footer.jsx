import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#00CC66] text-black py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left Section */}
        <div>
          {/* <h2 className="font-bold text-xl mb-4">WEB LOGO</h2> */}
          <h2 className="font-extrabold text-2xl mb-4">WEB LOGO</h2>

          <p className="text-sm mb-4">
            Some footer text about the Agency. Just a little description to help people understand you better
          </p>
          <div className="flex space-x-3">
            <div className="w-11 h-11 bg-green-700 rounded-full flex items-center justify-center">
              <img src="img/Facebook.png" alt="Facebook" className="w-3 h-5" />
            </div>
            <div className="w-11 h-11 bg-green-700 rounded-full flex items-center justify-center">
              <img src="img/Twitter.png" alt="Twitter" className="w-6 h-5" />
            </div>
            <div className="w-11 h-11 bg-green-700 rounded-full flex items-center justify-center">
              <img src="/img/Linkedin.png" alt="LinkedIn" className="w-6 h-4" />
            </div>
            <div className="w-11 h-11 bg-green-700 rounded-full flex items-center justify-center">
              <img src="img/Instagram.png" alt="Instagram" className="w-5 h-5" />
            </div>
          </div>
          <p className="text-sm mt-6 font-bold">Copyright Design Agency 2022</p>
        </div>

        {/* Center Section */}
        <div className='ml-30'>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm font-medium">
            <li>Services</li>
            <li>Portfolio</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className='ml-20'>
          <h3 className="font-semibold text-lg mb-4">Address</h3>
          <p className="text-sm font-medium">
            Design Agency Head Office.<br />
            Airport Road<br />
            United Arab Emirate
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
