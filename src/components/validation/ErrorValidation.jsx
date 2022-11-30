import React from "react";

export default function ErrorValidation({ name, classname }) {
  return (
    <div
      className={`text-red-500 font-medium tracking-wider mt-4 ${classname}`}
    >
      {name}
    </div>
  );
}
