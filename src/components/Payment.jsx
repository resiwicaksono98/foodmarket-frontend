import React from "react";
import NavigateBack from "./atom/NavigateBack";
import BCA from "../assets/images/BCA.png";
import BNI from "../assets/images/BNI.png";
import MANDIRI from "../assets/images/MANDIRI.png";
import AddImage from "../assets/icons/AddImage.png";
import Button from "./atom/Button";
import { useState } from "react";
import instanceRequest from "../utils/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetCart } from "../features/cartSlice";

export default function Payment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [preview, setPreview] = useState();
  const { shipping, address } = useSelector((state) => state.cart);

  if (!address) {
    return navigate("/delivery-address");
  }

  const handlePayment = async () => {
    try {
      const response = await instanceRequest.post(`/orders`, {
        delvery_fee: shipping,
        delivery_address: address,
      });
      if (response.status === 200) {
        alert("Order Success");
        navigate(`/invoice/${response.data._id}`);
        dispatch(resetCart());
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mx-8 py-8">
      <div className="flex items-center">
        <NavigateBack to={"/delivery-address"} />
        <div className=" flex-1 ml-6 md:ml-0 text-center font-yantramanav text-2xl font-medium tracking-wider">
          Payment
        </div>
      </div>
      <div className="md:mx-28">
        <div className="border mt-4"></div>
        {/* BCA */}
        <div className="flex items-center justify-between mt-6">
          <img src={BCA} alt="bca" className="h-10 md:h-full" />
          <div className="flex-col text-center font-yantramanav md:text-2xl font-semibold">
            <div>726382736</div>
            <div>An. Resi Wicaksono</div>
          </div>
        </div>
        <div className="border mt-4 "></div>
        {/* BNI */}
        <div className="flex items-center justify-between mt-6">
          <img src={BNI} alt="bni" className="h-10 md:h-full" />
          <div className="flex-col text-center font-yantramanav md:text-2xl font-semibold">
            <div>2121232323</div>
            <div>An. Resi Wicaksono</div>
          </div>
        </div>
        <div className="border mt-4 "></div>
        {/* Mandiri */}
        <div className="flex items-center justify-between mt-6">
          <img src={MANDIRI} alt="mandiri" className="h-10 md:h-full" />
          <div className="flex-col text-center font-yantramanav md:text-2xl font-semibold">
            <div>100009823728</div>
            <div>An. Resi Wicaksono</div>
          </div>
        </div>
        {/* Add Image */}
        <div className="flex items-center gap-6 mt-16">
          <label htmlFor="upload-photo" className="cursor-pointer">
            <img src={AddImage} alt="addImage" className="h-16 w-16" />
          </label>
          <input
            type="file"
            className="absolute invisible"
            id="upload-photo"
            onChange={(e) => {
              setPreview(URL.createObjectURL(e.target.files[0]));
            }}
          />
          {!preview ? (
            <div className=" font-semibold text-primary ">
              Upload Proof Of Transfer
            </div>
          ) : (
            <img src={preview} alt="" className="ml-6 max-h-28  rounded-lg " />
          )}
        </div>
        <Button
          name={"Create Order"}
          classname={"mt-10"}
          onClick={handlePayment}
        />
      </div>
    </div>
  );
}
