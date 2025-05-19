import React, { useRef } from "react";

function Testimonials() {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      message:
        "Thank You for your service. I am very pleased with the result. I have seen exponential growth in my business and it's all thanks to your amazing service.",
      name: "Emily Stones",
      role: "CEO, Marketing Guru",
      image: "/img/mrs Emily.png",
    },
    {
      message:
        "Your team is truly outstanding. The support and the level of professionalism is unmatched. You’ve helped us transform our approach.",
      name: "Elon Musk",
      role: "CEO, Tesla",
      image: "/img/E. Musk.jpeg",
    },
    {
      message:
        "We are extremely satisfied with the outcome. The service was top-notch and the results were even better than we imagined.",
      name: "Don Jazzy",
      role: "CEO, Mavins Group.",
      image: "/img/Don.jpeg",
    },
    {
      message:
        "I highly recommend your service to everyone. Your impact on our company growth has been phenomenal and extremely great.",
      name: "Owanate-Godwin Amachree",
      role: "CEO, Techrity Founder",
      image: "/img/My sis owans.jpeg",
    },
    {
      message:
        "Exceptional results delivered in record time! I was genuinely impressed by the level of attention to details taken to everything.",
      name: "Mark Zuckerberg",
      role: "CEO, Meta",
      image: "/img/markzuckerberg.webp",
    },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 360; // Adjust based on card width + gap

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      <section className="bg-white py-16 px-6">
        <div className="w-369 mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="text-left mb-6 md:mb-0">
              <p className="text-green-600 text-sm font-semibold">TESTIMONIALS</p>
              <h2 className="text-2xl md:text-3xl font-bold">
                See What Our Customer <br /> Say About Us
              </h2>
            </div>

            {/* Arrows */}
            <div className="flex gap-5">
              <button
                onClick={() => scroll("left")}
                className="w-25 h-20 rounded-full border-2 border-black flex items-center justify-center"
                aria-label="Scroll Left"
              >
                <img src="/img/Vector left.png" alt="left" className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-25 h-20 rounded-full bg-[#D7F5DC] flex items-center justify-center"
                aria-label="Scroll Right"
              >
                <img src="/img/Vector right.png" alt="right" className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scrollable testimonials */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-[340px] snap-start bg-white p-6 rounded-xl shadow-md"
              >
                <p className="text-gray-800">{t.message}</p>
                <div className="flex items-center gap-4 mt-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="font-semibold text-black">{t.name}</h1>
                    <p className="text-sm text-gray-600">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
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

