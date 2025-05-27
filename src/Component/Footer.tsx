import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-10 px-6">
        <div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 
                        md:ml-20 ml-6 lg:ml-50"
        >
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-1 text-white relative inline-block">
              Contact Us
              <span className="block w-32 h-1 bg-[#efc61e] mt-1" />
            </h3>
            <p className="mt-4 mb-3">Address: 123 Demo Street, City, Country</p>
            <p className="mb-3">Phone: +01 1234569540</p>
            <p>
              Email:{" "}
              <a href="mailto:demo@gmail.com" className="underline">
                demo@gmail.com
              </a>
            </p>
          </div>

          {/* Menu Links */}
          <div>
            <h3
              className="text-xl font-semibold mb-1 text-white relative inline-block 
                           ml-0 md:ml-12"
            >
              {/* ml-12 only on md+ */}
              Menu
              <span className="block w-14 h-1 bg-[#efc61e] mt-1" />
            </h3>
            <ul className="space-y-2 mt-4 ml-0 md:ml-12">
              {/* ml-12 only on md+ */}
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/our-room" className="hover:text-white">
                  Our Room
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-white">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-1 text-white relative inline-block">
              Newsletter
              <span className="block w-26 h-1 bg-[#efc61e] mt-1" />
            </h3>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 items-start sm:items-center mb-4"
            >
              <input
                type="email"
                placeholder="Enter Your email"
                required
                className="px-3 py-1.5 text-sm rounded-md text-white border border-white w-full sm:w-auto mt-5"
              />
              <button
                type="submit"
                className="bg-[#efc61e] hover:bg-yellow-300 text-black px-3 py-1.5 text-sm rounded-md mt-5"
              >
                Subscribe
              </button>
            </form>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-white hover:text-red-500 text-xl">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white hover:text-red-500 text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-red-500 text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-red-500 text-xl">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section (outside the footer) */}
      <div className="bg-white border-3 border-[#efc61e] text-center text-gray-800 text-lg font-bold py-4">
        © {new Date().getFullYear()} Smart Hotel. All rights reserved.
      </div>
    </>
  );
}

export default Footer;
