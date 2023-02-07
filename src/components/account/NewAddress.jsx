/** @format */

import { Formik, Form, Field } from "formik";
import React from "react";
import AddressSchema from "../validation/AddressSchema";
import { authRequest } from "../../utils/axiosInstance";
import ErrorValidation from "../validation/ErrorValidation";
import { useNavigate } from "react-router-dom";

export default function NewAddress() {
   const navigate = useNavigate();
   return (
      <Formik
         initialValues={{
            nama: "",
            kelurahan: "",
            kecamatan: "",
            kabupaten: "",
            provinsi: "",
            detail: "",
         }}
         validationSchema={AddressSchema}
         onSubmit={async (values) => {
            await authRequest
               .post(`https://wakburgerbar-api.cyclic.app/api/delivery-address`, values)
               .then((res) => {
                  if (res.status === 200) {
                     alert("Berhasil Menambahkan Alamat");
                     navigate("/account-settings/address");
                  }
               })
               .catch((err) => console.log(err));
         }}
      >
         {({ handleSubmit, errors, touched }) => (
            <div className="p-8">
               <div className="text-lg font-semibold">Create A New Address</div>
               <Form className="my-6 grid gap-6" onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="mb-4 ">
                     <label htmlFor="nama">Name</label>
                     <Field type="text" className="rounded-md w-full py-2 px-2" name="nama" placeholder="Your name" />
                     {errors.nama && touched.nama ? <ErrorValidation name={errors.nama} classname={"ml-16 md:mx-28"} /> : null}
                  </div>
                  {/* Province */}
                  <div className="mb-4 ">
                     <label htmlFor="provinsi">Province</label>
                     <Field as="select" name="provinsi" id="" className="w-full rounded-md py-2 px-2 ">
                        <option value="" disable="true">
                           Pilih Provinsi
                        </option>
                        <option value="Jawa Barat">Jawa Barat</option>
                        <option value="Jakarta">Jakarta</option>
                     </Field>
                     {errors.provinsi && touched.provinsi ? <ErrorValidation name={errors.provinsi} classname={"ml-16 md:mx-28"} /> : null}
                  </div>
                  {/* City */}
                  <div className="mb-4 ">
                     <label htmlFor="kabupaten">City</label>
                     <Field as="select" name="kabupaten" id="" className="w-full rounded-md py-2 px-2 ">
                        <option value="" disable="true">
                           Pilih Kabupaten
                        </option>
                        <option value="Bogor">Bogor</option>
                        <option value="Jakarta">Jakarta</option>
                     </Field>
                     {errors.kabupaten && touched.kabupaten ? <ErrorValidation name={errors.kabupaten} classname={"ml-16 md:mx-28"} /> : null}
                  </div>
                  {/* Village */}
                  <div className="mb-4 ">
                     <label htmlFor="kecamatan">Village</label>
                     <Field as="select" name="kecamatan" id="" className="w-full rounded-md py-2 px-2 ">
                        <option value="" disable="true">
                           Pilih Kecamatan
                        </option>
                        <option value="Gunung Sindur">Gunung Sindur</option>
                        <option value="Parung">Parung</option>
                     </Field>
                     {errors.kecamatan && touched.kecamatan ? <ErrorValidation name={errors.kecamatan} classname={"ml-16 md:mx-28"} /> : null}
                  </div>
                  {/* Village */}
                  <div className="mb-4 ">
                     <label htmlFor="kelurahan">Ward</label>
                     <Field as="select" name="kelurahan" id="" className="w-full rounded-md py-2 px-2 ">
                        <option value="" disable="true">
                           Pilih Kelurahan
                        </option>
                        <option value="Curug">Curug</option>
                        <option value="Padurenan">Padurenan</option>
                     </Field>
                     {errors.kelurahan && touched.kelurahan ? <ErrorValidation name={errors.kelurahan} classname={"ml-16 md:mx-28"} /> : null}
                  </div>
                  {/* Detail Street */}
                  <div className="mb-4 col-span-2 ">
                     <label htmlFor="Detail">Detail</label>
                     <Field as="textarea" name="detail" placeholder="Taman sari bukit damai A10/23" className="w-full h-full p-2 rounded-lg"></Field>
                     {errors.detail && touched.detail ? <ErrorValidation name={errors.detail} classname={"ml-16 md:mx-28"} /> : null}
                  </div>
                  <button type="submit" className="bg-primary py-2 px-2 text-lg font-yantramanav rounded-lg text-white hover:bg-secondary">
                     Set Address
                  </button>
               </Form>
            </div>
         )}
      </Formik>
   );
}
