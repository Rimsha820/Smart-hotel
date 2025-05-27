import { useState, useEffect } from "react";
import hotelRoom from "../assets/about-1.jpg";
import lobby from "../assets/about-2.jpg";
import dining from "../assets/about-p3.jpg";

function About() {
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    document.title = "About Us - Your Company Name";
  }, []);

  const shortText = `We are a team of passionate developers and designers committed to creating meaningful digital experiences. Our journey began in 2010 with a vision to transform ideas into impactful solutions.`;
  const fullText = ` Over the years, we've partnered with startups, enterprises, and non-profits to build scalable and user-centric platforms. Our mission is to blend creativity with technology, delivering results that truly matter.`;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb and Title */}
      <div className="mb-12 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold text-black mb-2">About Us</h2>
        <p className="text-md text-gray-500">Home / About Us</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-gray-800 text-base sm:text-lg text-center md:text-left flex flex-col items-center md:items-start lg:ml-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-black">
            Smart key Hotel
          </h1>
          <p className="mb-4">
            {shortText}
            {readMore && fullText}
          </p>
          <button
            onClick={() => setReadMore(!readMore)}
            aria-expanded={readMore}
            className="px-5 py-2.5 sm:px-6 sm:py-3 bg-black text-white rounded-full text-sm hover:bg-gray-700 transition mx-auto md:mx-0 "
          >
            {readMore ? "Show Less" : "Read More"}
          </button>
        </div>

        {/* Promo Offers */}
        <div className="w-full md:w-1/2 p-6 rounded-lg text-center md:text-left lg:ml-32">
          <h3 className="text-4xl font-semibold text-black mb-4">
            Exclusive Offers
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>20% Off On Accommodation</li>
            <li>Complimentary Daily Breakfast</li>
            <li>3 Pcs Laundry Per Day</li>
            <li>Free Wifi</li>
            <li>Discount 20% On F&B</li>
          </ul>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="mt-16 mb-8 lg:mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img
          src={hotelRoom}
          alt="Hotel Room"
          className="rounded-lg shadow-md w-full h-160 sm:h-130 object-cover"
        />
        <img
          src={lobby}
          alt="Lobby Area"
          className="rounded-lg shadow-md w-full h-160 sm:h-130 object-cover"
        />
        <img
          src={dining}
          alt="Dining Area"
          className="rounded-lg shadow-md w-full h-160 sm:h-130 object-cover"
        />
      </div>
    </div>
  );
}

export default About;
