import React from "react";
import NavigateBack from "./atom/NavigateBack";
import BCA from "../assets/images/BCA.png";
import BNI from "../assets/images/BNI.png";
import MANDIRI from "../assets/images/MANDIRI.png";
import AddImage from "../assets/icons/AddImage.png";
import Button from "./atom/Button";

export default function Payment() {
  return (
    <div className="mx-8 py-8">
      <div className="flex items-center gap-12">
        <NavigateBack to={"/cart"} />
        <div className="font-merriweatherSans text-3xl font-semibold">
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
          <img src={AddImage} alt="addImage" className="h-16 w-16" />
          <div className=" font-semibold text-primary">
            Upload Proof Of Transfer
          </div>
        </div>
        <Button
          name={"Complete Orders"}
          to={"/invoice/3232"}
          classname={"mt-10"}
        />
      </div>
    </div>
  );
}
