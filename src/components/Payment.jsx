import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import instanceRequest from "../utils/axiosInstance";
import Button from "./atom/Button";

export default function Payment() {
  const { orderId } = useParams();
  const [payment, setPayment] = useState();

  if (!payment) {
    <div>Loading.....</div>;
  }

  useEffect(() => {
    const getPayment = async () => {
      const response = await instanceRequest.get(`/payment/${orderId}`);
      setPayment(response.data);
    };
    getPayment();
  }, [orderId]);
  return (
    <div className="mx-8 py-8">
      <div className="flex-1 ml-6 md:ml-0 text-center font-yantramanav text-2xl font-medium tracking-wider">
        Your Transaction Payment
      </div>
      {/* Details */}
      <div className="md:p-12 py-12 flex gap-6 flex-wrap md:gap-28 font-yantramanav">
        {/* Transaction time */}
        <div className="flex flex-col gap-1 text-xl text-center ">
          <div className=" font-semibold">Transaction Time </div>
          <div className="">{payment?.transaction_time}</div>
        </div>
        {/* Type Payment */}
        <div className="flex flex-col gap-1 text-xl text-center ">
          <div className=" font-semibold">Payment Type </div>
          <div className="">{payment?.payment_type}</div>
        </div>
        {/* Currency */}
        <div className="flex flex-col gap-1 text-xl text-center ">
          <div className=" font-semibold">Currency </div>
          <div className="">{payment?.currency}</div>
        </div>
        {/* Total Payment */}
        <div className="flex flex-col gap-1 text-xl text-center ">
          <div className=" font-semibold">Total Payment </div>
          <div className="">{payment?.gross_amount}</div>
        </div>
        {/* Transaction status */}
        <div className="flex flex-col gap-1 text-xl text-center ">
          <div className=" font-semibold">Transaction Status </div>
          <div className="bg-green-500 py-2 text-white rounded-lg">
            {payment?.transaction_status}
          </div>
        </div>
      </div>
      {/* VA Bank */}
      <div className="md:p-12 mb-4">
        <div>
          <div className="text-2xl mb-2">Pay To </div>
          <div className="flex flex-col gap-1 text-xl text-center bg-gradient-to-br from-blue-700 to-blue-500 p-6 text-white rounded-md tracking-widest ">
            <div className="text-3xl uppercase">
              {payment?.va_numbers[0]?.bank}
            </div>
            <span className="text-sm">Virtual Account Number</span>
            <div className="font-semibold text-2xl">
              {payment?.va_numbers[0]?.va_number}
            </div>
          </div>
        </div>
      </div>
      {/* button */}
      <div className="flex justify-center items-center gap-8">
        <Button name={"Home"} className={"md:w-1/6"} to={"/"} />
        <Button
          name={"Invoice"}
          className={"md:w-1/6"}
          to={`/invoice/${orderId}`}
        />
      </div>
    </div>
  );
}
