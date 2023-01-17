import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toast = ({ message, type, children }) => {
  toast(message, {
    position: "top-center",
    type,
    autoClose: 800,
    toastId: type,
  });
};
