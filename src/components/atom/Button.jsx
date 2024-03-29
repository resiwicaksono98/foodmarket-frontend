import React from "react";
import { Link } from "react-router-dom";

export default function Button({ name, to, classname, ...rest }) {
  return (
    <Link to={to} {...rest}>
      <button
        className={`py-2 px-3 w-full bg-primary text-white rounded-lg pt-3 hover:bg-secondary ${classname}`}
      >
        {name}
      </button>
    </Link>
  );
}
