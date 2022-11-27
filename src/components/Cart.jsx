import React from "react";
import NavigateBack from "./atom/NavigateBack";
import AddCounter from "../assets/icons/AddCounter.png";
import Minus from "../assets/icons/Minus.png";
import Burger1 from "../assets/images/Burger1.png";
import Button from "./atom/Button";

export default function Cart() {
  return (
    <div className="mx-8 py-8">
      {/* Back and address */}
      <div className="md:flex gap-4 md:gap-[12rem] items-center font-yantramanav text-primary">
        <NavigateBack to={"/"} classname={"justify-center"} />
        <div className="text-lg md:text-xl mt-2 md:ml-10 font-semibold md:w-3/6 text-center">
          Your Address : Taman Sari Bukit Damai A10/23 Kecamatan Gunung Sindur
          Kabupaten Bogor
        </div>
      </div>
      {/* List Orders */}
      <div className="flex gap-8 md:gap-28 mt-16 justify-center items-center">
        {/* Counter Add*/}
        <div>
          <img
            src={AddCounter}
            alt="addCounter"
            className="h-10 w-10 cursor-pointer"
          />
        </div>
        {/* Menu Desc */}
        <div className="md:flex gap-8 items-center">
          <div className="flex justify-center mb-4 md:mb-0">
            <div className="absolute ml-14 -mt-2 h-8 w-8 bg-white border rounded-full flex pt-1 items-center justify-center border-primary">
              1
            </div>
            <img src={Burger1} alt="burger1" className="h-20 w-20 rounded-lg" />
          </div>
          <div className="flex-col  text-center">
            <div className="mb-2 md:mb-4 font-yantramanav font-semibold text-xl">
              Triple Cheesebuger
            </div>
            <div className="font-biryani mb-2 md:mb-0 text-sm text-slate-500">
              Note: Extra pedas
            </div>
          </div>
          <div className="font-yantramanav font-semibold text-xl text-primary text-center md:ml-[2rem]">
            IDR. 30.000
          </div>
        </div>
        {/* Counter Remove */}
        <div>
          <img src={Minus} alt="delete" className="h-10 w-10 cursor-pointer" />
        </div>
      </div>
      {/* Total Price */}
      <div className="mt-12 md:mx-[20rem]">
        <div className="border"></div>
        {/* Subtotal */}
        <div className="px-16 pt-10 flex justify-between font-yantramanav text-xl font-semibold ">
          <div>Sub Total</div>
          <div>IDR. 90.000</div>
        </div>
        {/* Shipping */}
        <div className="px-16 pt-10 flex justify-between font-yantramanav text-xl font-semibold ">
          <div>Shipping</div>
          <div>IDR. 10.000</div>
        </div>
        <div className="border mt-12"></div>
        {/* Total */}
        <div className="px-16 pt-10 flex justify-between font-yantramanav text-xl font-semibold ">
          <div>Total</div>
          <div>IDR. 100.000</div>
        </div>
        <Button
          name={"Create Orders"}
          to={`/payment/sds232ns`}
          classname="mt-12"
        />
      </div>
    </div>
  );
}
