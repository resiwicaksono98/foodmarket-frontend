import React from "react";
import * as Yup from "yup";

export default function LoginSchema() {
  return Yup.object().shape({
    email: Yup.string().required("Email is required").email(),
    password: Yup.string().required("Password is required"),
  });
}
