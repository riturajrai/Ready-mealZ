"use client";
import React, { useState } from "react";
import { FiMenu, FiX, FiMapPin, FiShoppingCart, FiUser } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 text-white p-2 rounded-full">
              🍱
            </div>
            <h1 className="text-xl font-semibold text-gray-800">
              ReadyMealz
            </h1>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
            <li className="text-orange-500 cursor-pointer">Menu</li>
            <li className="hover:text-orange-500 cursor-pointer">Subscribe</li>
            <li className="hover:text-orange-500 cursor-pointer">Bulk Order</li>
            <li className="hover:text-orange-500 cursor-pointer">Features</li>
          </ul>
          {/* Right Section */}
          <div className="hidden md:flex items-center gap-6">
            {/* Location */}
            <div className="flex items-center gap-1 text-gray-600">
              <FiMapPin />
              <span>Bhopal</span>
            </div>
            {/* Cart */}
            <div className="relative cursor-pointer">
              <FiShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                2
              </span>
            </div>
            {/* User */}
            <FiUser size={20} className="cursor-pointer" />
          </div>
          {/* Mobile Toggle */}
          <div className="md:hidden">
            {open ? (
              <FiX size={24} onClick={() => setOpen(false)} />
            ) : (
              <FiMenu size={24} onClick={() => setOpen(true)} />
            )}
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-700 font-medium">
            <li className="text-orange-500">Menu</li>
            <li>Subscribe</li>
            <li>Bulk Order</li>
            <li>Features</li>
            <div className="flex items-center gap-2">
              <FiMapPin />
              <span>Bhopal</span>
            </div>
            <div className="flex items-center gap-2">
              <FiShoppingCart />
              <span>Cart</span>
            </div>
            <div className="flex items-center gap-2">
              <FiUser />
              <span>Profile</span>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
