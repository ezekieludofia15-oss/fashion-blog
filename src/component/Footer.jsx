import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h1 className="text-3xl font-bold text-pink-500 mb-4">
              FASHIONISTA
            </h1>

            <p className="text-gray-400">
              Discover modern fashion trends, luxury
              collections, and streetwear inspiration.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Quick Links
            </h2>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-pink-500 cursor-pointer">
                Home
              </li>

              <li className="hover:text-pink-500 cursor-pointer">
                Products
              </li>

              <li className="hover:text-pink-500 cursor-pointer">
                Trends
              </li>

              <li className="hover:text-pink-500 cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Subscribe
            </h2>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-3 rounded-l-xl text-black outline-none"
              />

              <button className="bg-pink-600 px-5 rounded-r-xl hover:bg-pink-700 transition">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          © 2026 FASHIONISTA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;