import React from "react";
import { Link } from "react-router-dom";
import GoBack from "../../assets/icons/Go-Back.png";

export default function NavigateBack({ to, classname }) {
  return (
    <Link to={to} className={`flex absolute ${classname}`}>
      <img src={GoBack} alt="go-back" className="h-16 w-16" />
    </Link>
  );
}
