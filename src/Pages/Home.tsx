import { useState, useEffect } from "react";
import {
  FaPlane,
  FaUtensils,
  FaBaby,
  FaTshirt,
  FaCar,
  FaCocktail,
  FaArrowUp,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import image1 from "../assets/Banner 1.jpg";
import image2 from "../assets/banner 2.jpg";
import image3 from "../assets/banner 3.jpg";
import Testimonials from "../Component/CustomerReview";

import aboutImg1 from "../assets/about-1.jpg";
import aboutImg2 from "../assets/about-2.jpg";

const images = [image1, image2, image3];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScroll, setShowScroll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.pageYOffset > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/rooms");
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Slider Section */}
      <div className="relative w-full h-[1000px] sm:h-[700px] overflow-hidden">
        {/* Background Image */}
        <div
          className="relative w-full h-full overflow-hidden"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        ></div>

        {/* Overlay Content (Only One Time!) */}
        <div className="absolute inset-0  bg-opacity-50 flex items-center px-4 sm:px-8 md:px-12 lg:px-20 z-10">
          <div className="flex flex-col md:flex-row w-full justify-between gap-10 max-w-[1600px] mx-auto">
            {/* Left Text */}
            <div className="w-full md:w-1/2 text-white flex flex-col justify-center">
              <h1 className="mt-0 md:mt-0 text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-4">
                Smart Key A Luxury Hotel
              </h1>
              <p className="mb-6 text-gray-200 text-base md:text-lg">
                Here are the best hotel booking sites, including recommendations
                for international travel and for finding low-priced hotel rooms.
              </p>
              <p className="mt-2 text-white font-medium inline-block border-b-2 border-yellow-400 cursor-pointer text-2xl w-max pb-1">
                Discover Now
              </p>
            </div>

            {/* Right Booking Form */}
            <div className="w-full max-w-md bg-white bg-opacity-90 p-6 rounded text-black shadow-lg mx-auto md:mx-0 sm:p-4 mb-8 md:mb-0">
              <h2 className="font-semibold text-2xl sm:text-xl text-center mb-6 sm:mb-4">
                Book Your Room
              </h2>
              <form
                className="space-y-5 sm:space-y-4"
                onSubmit={handleBookingSubmit}
              >
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Check In:
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Check Out:
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Guests:
                  </label>
                  <input
                    type="number"
                    min="1"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Room:
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  >
                    <option value="1">1 Room</option>
                    <option value="2">2 Rooms</option>
                    <option value="3+">3+ Rooms</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded transition duration-200"
                >
                  Check Availability
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full max-w-[1600px] px-4 sm:px-8 md:px-12 lg:px-20 py-12 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-[#efc61e] mb-2 text-center md:text-left">
            About Us
          </h2>
          <h3 className="text-4xl font-bold text-red-600 mb-2 text-center md:text-left">
            Smart key Hotel
          </h3>
          <p className="text-gray-600 mb-4 text-center md:text-left">
            Sona.com is a leading online accommodation site. We’re passionate
            about travel. Every day, we inspire and reach millions of travelers
            across 90 local websites in 41 languages.
          </p>
          <p className="text-gray-600 mb-4 text-center md:text-left">
            So when it comes to booking the perfect hotel, vacation rental,
            resort, apartment, guest house, or tree house, we’ve got you
            covered.
          </p>
          <div className="flex md:justify-start justify-center">
            <p className="mt-2 text-black font-medium inline-block border-b-2 border-yellow-400 cursor-pointer">
              Read More
            </p>
          </div>
        </div>

        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img
            src={aboutImg1}
            alt="About 1"
            className="w-full h-auto max-h-80 object-cover rounded-lg shadow"
          />
          <img
            src={aboutImg2}
            alt="About 2"
            className="w-full h-auto max-h-80 object-cover rounded-lg shadow"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full bg-gray-100 py-12 px-4 sm:px-8 md:px-12 lg:px-20 lg:mb-14">
        <div className="max-w-[1300px] mx-auto text-center">
          <p className="text-yellow-500 text-lg font-medium mb-2 uppercase">
            What We Do
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mb-10">
            Discover Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                title: "Travel Plan",
                desc: "Let our expert concierge help you create the perfect itinerary with customized travel experiences and  recommendations.",
                icon: <FaPlane className="text-5xl text-yellow-500" />,
              },
              {
                title: "Catering Service",
                desc: "Enjoy gourmet meals in-room or at events with our on-demand catering featuring international and local cuisine.",
                icon: <FaUtensils className="text-5xl text-yellow-500" />,
              },
              {
                title: "Babysitting",
                desc: "Reliable and professional babysitting services are available so parents can relax and enjoy their stay worry-free.",
                icon: <FaBaby className="text-5xl text-yellow-500" />,
              },
              {
                title: "Laundry",
                desc: "Our hotel provides same-day laundry and dry cleaning services to keep your wardrobe fresh and ready.",
                icon: <FaTshirt className="text-5xl text-yellow-500" />,
              },
              {
                title: "Hire Driver",
                desc: "Chauffeur-driven car rentals for airport pickups, local sightseeing, and business travel are available 24/7.",
                icon: <FaCar className="text-5xl text-yellow-500" />,
              },
              {
                title: "Bar & Drink",
                desc: "Unwind at our full-service bar with curated cocktails, premium wines, and a relaxing ambiance.",
                icon: <FaCocktail className="text-5xl text-yellow-500" />,
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded shadow hover:shadow-md transition"
              >
                <div className="flex justify-center mb-3">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-black mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-md">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Testimonials />

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-3 right-4 bg-[#efc61e] hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-opacity duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default Home;
