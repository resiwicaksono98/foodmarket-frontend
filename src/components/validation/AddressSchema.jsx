/** @format */

import React from "react";
import * as Yup from "yup";

export default function AddressSchema() {
   return Yup.object().shape({
      nama: Yup.string().required("Email is required"),
      kelurahan: Yup.string().required("Kelurahan is required"),
      kecamatan: Yup.string().required("Kecamatan is required"),
      kabupaten: Yup.string().required("Kabupaten is required"),
      provinsi: Yup.string().required("Provinsi is required"),
      detail: Yup.string().required("Detail is required"),
   });
}
