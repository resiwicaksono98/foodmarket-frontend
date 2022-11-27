import React from "react";
import Logo from "../assets/images/Logo.png";

export default function Footer() {
  return (
    <div className="bg-primary p-8  ">
      <img src={Logo} alt="logo" className="h-10" />
      <div className="md:flex gap-12 items-center justify-center">
        <div className=" font-yantramanav text-slate-400">
          2022 Wak Burger Bar. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
