/** @format */

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import instanceRequest, { authRequest } from "../../utils/axiosInstance";

export default function Address() {
   const [addresses, setAddresses] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
      const getAddress = async () => {
         const { data } = await instanceRequest.get("delivery-address");
         setAddresses(data.data);
      };
      getAddress();
   }, []);

   const handleDelete = async (id) => {
      console.log(id);
      await authRequest
         .delete(`https://wakburgerbar-api.cyclic.app/api/delivery-address/${id}`)
         .then((res) => {
            if (res.status === 200) {
               alert("Success Delete Address");
               navigate(0);
            }
         })
         .catch((err) => console.log(err));
   };
   return (
      <div>
         <div className="p-6 font-yantramanav">
            <Link to={"new"} className="bg-primary py-2 px-3 rounded-lg text-white hover:bg-secondary ">
               Add A New Address
            </Link>
            {addresses.length === 0 ? (
               <div className="text-center mt-20">Loading...</div>
            ) : (
               <table className="table-auto w-full my-6 text-xs md:text-base">
                  <thead>
                     <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Action</th>
                     </tr>
                  </thead>

                  <tbody className="text-center">
                     {addresses.map((address, i) => (
                        <tr key={i}>
                           <td>{i + 1}</td>
                           <td>{address.nama}</td>
                           <td className="w-4/6 px-6">
                              {address.detail} {address.kelurahan} {address.kecamatan} {address.kabupaten} {address.provinsi}
                           </td>
                           <td>
                              <button className="bg-primary my-2 py-2 px-3 rounded-lg text-white w-full hover:bg-secondary" onClick={() => handleDelete(address._id)}>
                                 Delete
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            )}
         </div>
      </div>
   );
}
