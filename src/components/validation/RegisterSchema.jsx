import React from "react";
import * as Yup from "yup";

export default function RegisterSchema() {
  return Yup.object().shape({
    fullname: Yup.string().required("Fullname is required"),
    email: Yup.string().required("Email is required").email(),
    password: Yup.string().required("Password is required"),
  });
}
