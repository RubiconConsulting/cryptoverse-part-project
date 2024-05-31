import React from "react";
import image from "../assets/Vector 5.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#0C92DE] text-white">
      <div>
        <img src={image} alt="Logo" className="h-8" />
      </div>
      <div>
        <button className="px-4 py-2 bg-blue-700 hover:bg-blue-500 rounded">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
