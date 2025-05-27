import { useEffect, useRef, useState } from 'react';
import contactImg from '../assets/conatct.jpg';

// Custom hook to detect if element is in view
function useInView(threshold = 0.3): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold]);

  return [ref as React.RefObject<HTMLDivElement>, isVisible];
}

function Contact() {
  const [imgRef, imgVisible] = useInView();
  const [formRef, formVisible] = useInView();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row overflow-hidden rounded-lg md:gap-12">
        {/* Left side - Image */}
        <div
          ref={imgRef}
          className={`md:w-1/2 transition-all duration-700 transform lg:ml-6 ${
            imgVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}
        >
          <img
            src={contactImg}
            alt="Contact Us"
            className="object-cover w-full h-64 md:h-full mt-6 md:mt-0 rounded-lg"
          />
        </div>

        {/* Right side - Form */}
        <div
          ref={formRef}
          className={`md:w-1/2 p-8 bg-gray-100 transition-all duration-700 transform lg:ml-8
            ${
            formVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center md:text-left mt-7">
            Contact Us
          </h2>
          <form className="space-y-4 text-sm max-w-md mx-auto md:mx-0">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+92 1234567890"
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={3}
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 resize-none focus:outline-none focus:ring-1 focus:ring-red-500"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-4 py-2.5 rounded-full hover:bg-red-700 transition text-sm w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
