/** @format */

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import instanceRequest from "../utils/axiosInstance";
import Button from "./atom/Button";
import NavigateBack from "./atom/NavigateBack";

export default function Invoice() {
   const { order_id } = useParams();
   const navigate = useNavigate();
   const [invoices, setInvoices] = useState([]);
   const [payments, setPayments] = useState([]);
   const { va_numbers } = payments;
   useEffect(() => {
      const getInvoice = async () => {
         try {
            const response = await instanceRequest.get(`/invoice/${order_id}`);
            setInvoices(response.data);
         } catch (error) {
            navigate("/");
         }
      };
      const getPayment = async () => {
         const response = await instanceRequest.get(`/payment/${order_id}`);
         setPayments(response.data);
      };
      getInvoice();
      getPayment();
   }, [order_id]);
   return (
      <div className="my-8 mx-8">
         {/* Nav back and title */}
         <div className="md:flex gap-4 md:gap-[12rem] items-center font-yantramanav text-primary">
            <NavigateBack to={"/"} classname={"justify-center"} />
            <div className="text-3xl font-merriweatherSans mt-2 md:ml-10 font-semibold md:w-3/6 text-center">Invoice Your Order</div>
         </div>
         <div className="md:flex justify-center mt-8 text-white ">
            <div className="bg-primary p-12 rounded-lg font-yantramanav">
               {/* Status payment */}
               <div className="md:flex items-center md:gap-[15rem] justify-between">
                  <div className="font-semibold mb-2 md:mb-0 text-xl tracking-wider">Status Payment</div>
                  <div className="bg-lightBlue py-2 px-4  rounded-lg text-xl ">{invoices?.payment_status}</div>
               </div>
               <div className="border my-8"></div>
               {/* Order Id */}
               <div className="md:flex items-center md:gap-[15rem] justify-between">
                  <div className="font-semibold text-xl mb-2 md:mb-0 tracking-wider">Order Id</div>
                  <div className="  text-xl font-semibold text-slate-300   ">#{invoices?.order?.order_number}</div>
               </div>
               <div className="border my-8"></div>
               {/* Total amount */}
               <div className="md:flex items-center md:gap-[15rem] justify-between">
                  <div className="font-semibold mb-2 md:mb-0  text-xl tracking-wider">Total Amount</div>
                  <div className="  text-xl font-semibold text-slate-300   ">IDR. {invoices?.total}</div>
               </div>
               <div className="border my-8"></div>
               {/* Billed To */}
               <div className="md:flex items-center md:gap-[15rem] justify-between">
                  <div className="font-semibold text-xl tracking-wider">Billed To</div>
                  <div className="md:text-end text-slate-300 ">
                     <div className=" text-xl font-semibold">{invoices?.delivery_address?.fullname}</div>
                     <div className="">{invoices?.user?.email}</div>
                     <div className=" max-w-xs">
                        {invoices?.delivery_address?.provinsi} , {invoices?.delivery_address?.kabupaten} ,{invoices?.delivery_address?.kecamatan} , {invoices?.delivery_address?.kelurahan} , {invoices?.delivery_address?.detail}
                     </div>
                  </div>
               </div>
               <div className="border my-8"></div>
               {/* Payement To */}
               <div className="md:flex items-center md:gap-[15rem] justify-between">
                  <div className="font-semibold text-xl tracking-wider">Payment To</div>
                  <div className="md:text-end text-slate-300 ">
                     <div className=" text-xl font-semibold">Midtrans Payment</div>
                     <div>Virtual Account</div>
                     {va_numbers?.map((va, i) => (
                        <div className=" flex gap-4 md:justify-end" key={i}>
                           <div>{va.bank.toUpperCase()}</div>
                           <div>{va.va_number}</div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
         <div className="flex justify-center w-full">
            <Button name={"Success Payment"} to={`/`} classname="mt-12 " />
         </div>
      </div>
   );
}
