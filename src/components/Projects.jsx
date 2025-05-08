import React from 'react';

function Projects() {
  return (
    <div>
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="flex flex-col md:flex-row justify-center items-center text-center gap-8 md:gap-12">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center md:pr-6 md:border-r md:border-gray-300">
              <img src="img/project-plan.png" alt="Completed Projects" className="h-12 w-12 mb-4" />
              <p className="text-black mb-2">Completed Projects</p>
              <h3 className="text-green-600 font-bold text-2xl">100 +</h3>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center md:px-6 md:border-r md:border-gray-300">
              <img src="img/ratings.png" alt="Customer Satisfaction" className="h-12 w-12 mb-4" />
              <p className="text-black mb-2">Customer Satisfaction</p>
              <h3 className="text-green-600 font-bold text-2xl">20 %</h3>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center md:px-6 md:border-r md:border-gray-300">
              <img src="img/raise.png" alt="Raised by Clients" className="h-12 w-12 mb-4" />
              <p className="text-black mb-2">Raised by Clients</p>
              <h3 className="text-green-600 font-bold text-2xl">$10M</h3>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center md:pl-6">
              <img src="img/timeline.png" alt="Years in Business" className="h-12 w-12 mb-4" />
              <p className="text-black mb-2">Years in Business</p>
              <h3 className="text-green-600 font-bold text-2xl">2 yrs</h3>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}

export default Projects;
