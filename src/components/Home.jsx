import React from "react";

export default function Home() {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-4 gap-4">
        {/* Left */}
        <div className="col-span-3">
          <div className="font-yantramanav">
            <div className="text-2xl font-medium">Only For You : </div>
          </div>
        </div>
        {/* Right */}
        <div className=" bg-blue-500">Right</div>
      </div>
    </div>
  );
}
