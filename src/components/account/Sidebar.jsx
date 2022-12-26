import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import instanceRequest, { authRequest } from "../../utils/axiosInstance";
import { Toast } from "../atom/Toast";
import "react-toastify/dist/ReactToastify.css";

export default function Sidebar() {
  const navigate = useNavigate();
  const lists = [
    { name: "Profile", to: "/account-settings" },
    { name: "Address", to: "/account-settings/address" },
  ];

  const handleLogout = async () => {
    try {
      await authRequest.post("/logout");
      Toast({ type: "success", message: "Success Logout" });
      setTimeout(() => {
        navigate("/");
        navigate(0);
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="text-center text-white p-6 rounded-lg bg-primary   font-yantramanav tracking-wide">
      <ToastContainer />
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
        <div
          className="hover:bg-secondary py-2 hover:rounded-lg cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </div>
      </div>
    </div>
  );
}
