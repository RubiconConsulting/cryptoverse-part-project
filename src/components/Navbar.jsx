import React from "react";
import image from "../assets/logo-white.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-indigo-900 text-white">
      <div>
        <img src={image} alt="Logo" className="h-8" />
      </div>
      <div>
        <button className="px-4 py-2 bg-blue-700 hover:bg-blue-500 rounded cursor-pointer">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
