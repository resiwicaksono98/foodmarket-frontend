import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Payment from "../components/Payment";
import SelectPayment from "../components/SelectPayment";
import instanceRequest from "../utils/axiosInstance";

export default function PaymentUser() {
  const { orderId } = useParams();
  const [payment, setPayment] = useState();

  useEffect(() => {
    const getPayment = async () => {
      try {
        const response = await instanceRequest.get(`/payment/${orderId}`);
        setPayment(response.data);
      } catch (error) {}
    };
    getPayment();
  }, [orderId]);
  return <Layout>{payment ? <Payment /> : <SelectPayment />}</Layout>;
}
