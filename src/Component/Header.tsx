import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { MdOutlineBed } from "react-icons/md";
import logo from "../assets/logo.png";
import { useRoomBooking } from "../Store/RoombookingContext";

interface LinkClassProps {
  isActive: boolean;
  isPending?: boolean;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const { bookedRoom, setBookedRoom } = useRoomBooking();

  const linkClass = ({ isActive }: LinkClassProps) =>
    isActive
      ? "text-red-600 font-semibold border-b-2 border-red-600 pb-1"
      : "text-black";

  const toggleDetails = () => {
    if (bookedRoom) setDetailsOpen(!detailsOpen);
  };

  return (
    <header className="bg-white shadow-md px-6 py-6 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2 text-black font-bold text-2xl">
          <img src={logo} alt="Smart Hotels Logo" className="h-8 w-auto" />
          <span>Smart Hotel</span>
        </div>

        {/* Hamburger menu button for mobile */}
        <button
          className="md:hidden text-3xl text-black z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8 font-bold text-lg">
          <NavLink to="/home" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/rooms" className={linkClass}>
            Our Rooms
          </NavLink>
          <NavLink to="/gallery" className={linkClass}>
            Gallery
          </NavLink>
          <NavLink to="/blog" className={linkClass}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Booked Room icon - with responsive margin and size */}
      <div
        className="absolute top-4 right-16 sm:right-2 sm:mr-2 bg-[#f9cc5d] p-2 rounded-full shadow-lg border-2 border-gray-200 cursor-pointer select-none z-40"
        onClick={toggleDetails}
        aria-label="Toggle Booked Room Details"
        title={bookedRoom ? "Show booked room details" : "No room booked"}
      >
        <MdOutlineBed
          className={`transition-colors ${
            bookedRoom
              ? "text-yellow-700 hover:text-yellow-800"
              : "text-gray-400"
          } w-7 h-7 sm:w-10 sm:h-10`} 
        />
      </div>

      {/* Booked room details panel */}
      {detailsOpen && bookedRoom && (
        <div className="absolute top-[100px] right-6 w-80 bg-white rounded-lg shadow-lg border border-gray-300 p-4 z-50">
          <div className="flex justify-between items-start">
            <h4 className="font-bold text-lg">{bookedRoom.title}</h4>
            <button
              className="text-gray-500 hover:text-gray-800 text-2xl"
              onClick={() => setDetailsOpen(false)}
              aria-label="Close room details"
              title="Close"
            >
              ×
            </button>
          </div>

          <img
            src={bookedRoom.image}
            alt={bookedRoom.title}
            className="w-full h-32 object-cover rounded mt-2"
          />

          <p className="text-red-600 font-bold text-xl mt-2">
            ${bookedRoom.price} / night
          </p>
          <p className="text-sm mt-1">Size: {bookedRoom.size}</p>
          <p className="text-sm">Capacity: {bookedRoom.capacity}</p>
          <p className="text-sm">Bed: {bookedRoom.bed}</p>

          <button
            className="mt-3 w-full bg-red-500 text-white py-1 rounded hover:bg-red-600"
            onClick={() => {
              setBookedRoom(null);
              setDetailsOpen(false);
            }}
          >
            Remove Booking
          </button>
        </div>
      )}

      {/* Mobile menu when open */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 mt-4">
          <nav className="flex flex-col space-y-4 font-bold text-lg">
            <NavLink
              to="/"
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/rooms"
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              Our Rooms
            </NavLink>
            <NavLink
              to="/gallery"
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/blog"
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
