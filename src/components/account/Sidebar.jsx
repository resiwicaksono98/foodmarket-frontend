import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  const lists = [
    { name: "Profile", to: "/account-settings" },
    { name: "Address", to: "/account-settings/address" },
    { name: "Logout" },
  ];
  return (
    <div className="text-center text-white p-6 rounded-lg bg-primary   font-yantramanav tracking-wide">
      <div className="text-xl font-medium">Account Settings</div>
      {/* List */}
      <div className="flex flex-col gap-4 my-6 text-lg ">
        <div className="border"></div>
        {lists.map((list, i) => (
          <NavLink
            to={list.to}
            className={`hover:bg-secondary py-2 hover:rounded-lg cursor-pointer`}
            key={i}
          >
            {list.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
