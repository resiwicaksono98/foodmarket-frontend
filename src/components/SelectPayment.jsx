import React from "react";
import NavigateBack from "./atom/NavigateBack";
import BCA from "../assets/images/BCA.png";
import BNI from "../assets/images/BNI.png";
import MANDIRI from "../assets/images/MANDIRI.png";
import Button from "./atom/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import instanceRequest from "../utils/axiosInstance";
import { useState } from "react";
import { Toast } from "./atom/Toast";
import { resetCart } from "../features/cartSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function SelectPayment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orderId } = useParams();
  const [amount, setAmount] = useState(0);

  //   Payment List
  const banks = [
    {
      name: "bca",
      image: BCA,
    },
    {
      name: "bni",
      image: BNI,
    },
    {
      name: "mandiri",
      image: MANDIRI,
    },
  ];

  useEffect(() => {
    const getInvoice = async () => {
      const response = await instanceRequest.get(`/invoice/${orderId}`);
      setAmount(response.data.total);
    };
    getInvoice();
  }, [orderId]);

  const handlePayment = async ({ bankName }) => {
    try {
      const response = await instanceRequest.post(`/payment/${orderId}`, {
        paymentType: "bank_transfer",
        grossAmount: amount,
        bankName: bankName,
      });
      Toast({ message: "Payment created", type: "success" });
      setTimeout(() => {
        navigate(0);
        dispatch(resetCart());
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-8 py-8">
      <ToastContainer />
      <div className="flex items-center">
        <NavigateBack to={"/delivery-address"} />
        <div className=" flex-1 ml-6 md:ml-0 text-center font-yantramanav text-2xl font-medium tracking-wider">
          Select Your Type Payment
        </div>
      </div>
      <div className="md:mx-28">
        <div className="border mt-4"></div>
        {/* BCA */}
        {banks.map((bank, i) => (
          <div key={i}>
            <div className="flex items-center justify-between my-6 mt-6">
              <img src={bank.image} alt={bank.name} className=" md:h-full" />
              <Button
                name={"Select"}
                onClick={() => handlePayment({ bankName: bank.name })}
              />
            </div>
            <div className="border mt-4 "></div>
          </div>
        ))}
      </div>
    </div>
  );
}
