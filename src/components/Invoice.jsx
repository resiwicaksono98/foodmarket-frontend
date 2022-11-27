import React from "react";
import Button from "./atom/Button";
import NavigateBack from "./atom/NavigateBack";

export default function Invoice() {
  return (
    <div className="my-8 mx-8">
      {/* Nav back and title */}
      <div className="md:flex gap-4 md:gap-[12rem] items-center font-yantramanav text-primary">
        <NavigateBack to={"/"} classname={"justify-center"} />
        <div className="text-3xl font-merriweatherSans mt-2 md:ml-10 font-semibold md:w-3/6 text-center">
          Invoice
        </div>
      </div>
      <div className="md:flex justify-center mt-8 text-white ">
        <div className="bg-primary p-12 rounded-lg font-yantramanav">
          {/* Status payment */}
          <div className="md:flex items-center md:gap-[15rem] justify-between">
            <div className="font-semibold mb-2 md:mb-0 text-xl tracking-wider">
              Status Payment
            </div>
            <div className="bg-lightBlue py-2 px-4  rounded-lg text-xl ">
              Waiting Payment
            </div>
          </div>
          <div className="border my-8"></div>
          {/* Order Id */}
          <div className="md:flex items-center md:gap-[15rem] justify-between">
            <div className="font-semibold text-xl mb-2 md:mb-0 tracking-wider">
              Order Id
            </div>
            <div className="  text-xl font-semibold text-slate-300   ">
              #2003
            </div>
          </div>
          <div className="border my-8"></div>
          {/* Total amount */}
          <div className="md:flex items-center md:gap-[15rem] justify-between">
            <div className="font-semibold mb-2 md:mb-0  text-xl tracking-wider">
              Total Amount
            </div>
            <div className="  text-xl font-semibold text-slate-300   ">
              IDR. 100.000
            </div>
          </div>
          <div className="border my-8"></div>
          {/* Billed To */}
          <div className="md:flex items-center md:gap-[15rem] justify-between">
            <div className="font-semibold text-xl tracking-wider">
              Billed To
            </div>
            <div className="md:text-end text-slate-300 ">
              <div className=" text-xl font-semibold">Bunga Kurnia</div>
              <div className="">Bunga@gmail.com</div>
              <div className=" max-w-xs">
                Jawa Barat, Bogor , Gunung Sindur, Padurenan, Jl Pahlawan 99 No
                69
              </div>
            </div>
          </div>
          <div className="border my-8"></div>
          {/* Payement To */}
          <div className="md:flex items-center md:gap-[15rem] justify-between">
            <div className="font-semibold text-xl tracking-wider">
              Payment To
            </div>
            <div className="md:text-end text-slate-300 ">
              <div className=" text-xl font-semibold">Resi Wicaksono</div>
              <div>resiwicaksono@gmail.com</div>
              <div className="0 flex gap-4 md:justify-end">
                <div>BCA</div>
                <div>xxx-xxx-xxx-669</div>
              </div>
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
