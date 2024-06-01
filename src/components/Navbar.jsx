import React from "react";
import image from "../assets/logo-white.svg";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { Button } from "./Button";

const truncateAddress = (address) => {
  if (!address) return "No Account";
  const match = address.match(
    /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{3})$/
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

export const toHex = (num) => {
  const val = Number(num);
  return "0x" + val.toString(16);
};

const Navbar = () => {
  const handleConnectWallet = () => {};
  return (
    <nav className="flex justify-between items-center p-4 bg-indigo-900 text-white">
      <Link to="/">
        <div>
          <img src={image} alt="Logo" className="h-8" />
        </div>
      </Link>
      <div>
        <Button
          onClick={handleConnectWallet}
          placeholder={"w" !== "" ? `${truncateAddress("")}` : "Connect Wallet"}
          icon={<BsPerson />}
        />
      </div>
    </nav>
  );
};

export default Navbar;
