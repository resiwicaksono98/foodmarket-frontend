import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAddress } from "../features/cartSlice";
import instanceRequest from "../utils/axiosInstance";
import NavigateBack from "./atom/NavigateBack";

export default function SelectAddress() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const getAddress = async () => {
      const { data } = await instanceRequest.get("/delivery-address");
      setAddresses(data.data);
    };
    getAddress();
  }, []);
  return (
    <div className="mx-8 py-8">
      {/* Navigate and title */}
      <div className="flex items-center">
        <NavigateBack to={"/cart"} />
        <div className=" flex-1 ml-6 md:ml-0 text-center font-yantramanav text-2xl font-medium tracking-wider">
          Select Your Address
        </div>
      </div>
      {/* Content */}
      <div className="mt-16 md:mx-8">
        <table className="table-auto w-full border-collapse border border-slate-400 font-yantramanav">
          <thead>
            <tr>
              <th className="border border-slate-300">No</th>
              <th className="border border-slate-300">Name</th>
              <th className="border border-slate-300">Address</th>
              <th className="border border-slate-300">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {addresses.map((address, i) => (
              <tr key={i}>
                <td className="border border-slate-300">{i + 1}</td>
                <td className="border border-slate-300 px-2">{address.nama}</td>
                <td className="border border-slate-300 px-2 ">
                  {`${address.detail} Kel ${address.kelurahan} Kec ${address.kecamatan} Kab ${address.kabupaten} Prov ${address.provinsi} Indonesia`}
                  {/* Taman Sari Bukit Damai A16/40 Bogor Jawa Barat */}
                </td>
                <td className="border border-slate-300 py-2 px-2">
                  <button
                    onClick={() => {
                      dispatch(addAddress({ id: address._id }));
                      navigate("/payment");
                    }}
                    className="bg-primary py-2 px-2 rounded-lg text-white hover:bg-secondary"
                  >
                    Select Address
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
