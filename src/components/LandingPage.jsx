import React from 'react';

function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Full-width Green Background */}
      <div className="bg-green-100 relative overflow-hidden pb-0 h-[700px] md:h-174">
        
        {/* Background Bubbles */}
        <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-green-100 rounded-full opacity-30 blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-green-200 rounded-full opacity-20 blur-2xl transform translate-x-1/3 translate-y-1/3"></div>

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 md:px-6 pt-20 pb-10 relative gap-8">
          
          {/* Text Section */}
          <div className="max-w-lg relative z-10 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Increase Your <br />
              Customers Loyalty <br />
              and Satisfaction
            </h1>
            <p className="text-gray-600 mb-6 text-base md:text-lg">
              We help businesses like yours earn more customers, 
              standout from competitors, make more money
            </p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-600">
              Get Started
            </button>
          </div>

          {/* Lady + Floating Icons/Dots */}
          {/* Lady + Floating Icons/Dots */}
<div className="relative inline-block z-10 -ml-10 w-full md:w-auto">
  {/* Lady Image */}
  <div className="ml-0 md:ml-25 flex justify-center md:block">
    <img src="img/Header Lady 1.png" alt="Happy Lady" className="w-[300px] md:w-[590px] h-auto" />
  </div>

  {/* Floating Icons */}
  <img src="img/Star.png" alt="Star" className="absolute top-4 left-1/2 transform -translate-x-1/2 md:top-19 md:left-44 w-10 md:w-15 h-10 md:h-14" />
  <img src="img/TickBox.png" alt="Tick" className="absolute top-20 right-10 md:top-30 md:right-48 w-9 md:w-12 h-9 md:h-11" />
  <img src="img/WorkBox.png" alt="WorkBox" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:bottom-16 md:left-20 w-10 md:w-15 h-10 md:h-14" />

  {/* Floating Dots */}
  <img src="img/Rectangle green dot 1.png" alt="Green Dot" className="absolute top-2 right-10 md:top-10 md:right-138 w-2 md:w-4 h-2 md:h-4 rounded-full" />
  <img src="img/Rectangle green dot 1.png" alt="Orange Dot" className="absolute bottom-4 right-16 md:bottom-76 md:right-66 w-3 md:w-5 h-2 md:h-3 rounded-full" />
  <img src="img/Rectangle green dot 1.png" alt="Green Dot" className="absolute top-24 left-8 md:top-79 md:left-42 w-2 md:w-5 h-2 md:h-2 rounded-full" />
  <img src="img/Rectangle orange 1.png" alt="Orange Dot" className="absolute top-8 left-2/3 md:top-15 md:left-100 w-3 md:w-5 h-3 md:h-5 rounded-full" />
  <img src="img/Rectangle orange 1.png" alt="Orange Dot" className="absolute bottom-12 left-2/3 md:bottom-12 md:left-144 w-3 md:w-5 h-3 md:h-5 rounded-full" />
</div>

        </section>

        {/* Partner Logos Section */}
<section className="bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.10)] py-8 mt-[-40px]">
  <div className="max-w-6xl mx-auto flex justify-around items-center px-4 md:px-6">
    <img src="img/google.png" alt="Google Logo" className="h-6 object-contain" />
    <img src="img/Trello-logo.png" alt="Trello Logo" className="h-6 object-contain" />
    <img src="img/logos_monday.png" alt="Monday Logo" className="h-6 object-contain" />
    <img src="img/Notion.png" alt="Notion Logo" className="h-6 object-contain" />
    <img src="img/Slack.png" alt="Slack Logo" className="h-6 object-contain" />
  </div>
</section>


      </div>
    </div>
  );
}

export default LandingPage;







{/* <div className="flex items-center gap-2">
            <img src="img/Monday.png" alt="Monday Logo" className="h-8" />
            <h1 className="text-gray-600 font-semibold">Monday</h1>
          </div> */}