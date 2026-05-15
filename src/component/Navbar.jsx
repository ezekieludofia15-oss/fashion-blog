import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiSearch,
  FiShoppingBag,
  FiBell,
  FiMenu,
} from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/863/863684.png"
              alt="logo"
              className="w-11 h-11"
            />

            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 bg-clip-text text-transparent tracking-wide">
              FASHIONISTA
            </h1>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-10">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-600 font-semibold border-b-2 border-pink-600 pb-1"
                  : "text-gray-700 hover:text-pink-600 hover:scale-110 transition-all duration-300 font-medium"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-600 font-semibold border-b-2 border-pink-600 pb-1"
                  : "text-gray-700 hover:text-pink-600 hover:scale-110 transition-all duration-300 font-medium"
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/trends"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-600 font-semibold border-b-2 border-pink-600 pb-1"
                  : "text-gray-700 hover:text-pink-600 hover:scale-110 transition-all duration-300 font-medium"
              }
            >
              Trends
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-600 font-semibold border-b-2 border-pink-600 pb-1"
                  : "text-gray-700 hover:text-pink-600 hover:scale-110 transition-all duration-300 font-medium"
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-5">

            {/* Search */}
            <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <FiSearch className="text-gray-500" />

              <input
                type="text"
                placeholder="Search fashion..."
                className="bg-transparent outline-none px-2 text-sm"
              />
            </div>

            {/* Notification */}
            <button className="relative text-gray-600 hover:text-pink-600 transition">
              <FiBell className="text-2xl" />

              <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* Cart */}
            <button className="relative text-gray-600 hover:text-pink-600 transition">
              <FiShoppingBag className="text-2xl" />

              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            {/* Profile */}
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt="profile"
              className="w-11 h-11 rounded-full object-cover border-2 border-pink-500 cursor-pointer hover:scale-110 transition duration-300"
            />

            {/* Mobile Menu */}
            <button className="md:hidden text-3xl text-gray-700">
              <FiMenu />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;