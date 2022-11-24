import React from "react";
import Logo from "../assets/icons/Logo.png";

export default function Navbar() {
  return (
    <div className="md:flex p-4  items-center justify-between text-white bg-primary ">
      <div className=" md:flex  items-center">
        <div className="flex items-center w-full justify-center font-yantramanav gap-4 cursor-pointer">
          <img src={Logo} alt="logo" />
          <div className="text-2xl md:text-[25px] font-semibold">
            Wak Burger Bar
          </div>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="h-[45px] md:ml-12 mt-4 md:mt-0 w-full rounded-[15px]  px-4 pt-2 text-lg text-black font-semibold"
        />
      </div>
      <div className="mt-4 md:mt-0 flex justify-center gap-4 font-yantramanav">
        <div className="py-1 px-3 bg-white text-secondary text-xl rounded-[8px] cursor-pointer font-semibold hover:bg-lightBlue hover:text-white ">
          Login
        </div>
        <div className="py-1 px-3 bg-lightBlue text-white text-xl rounded-[8px] cursor-pointer font-semibold hover:bg-white hover:text-secondary ">
          Register
        </div>
      </div>
    </div>
  );
}
