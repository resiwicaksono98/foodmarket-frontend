import React from "react";

export default function NewAddress() {
  return (
    <div className="p-8">
      <div className="text-lg font-semibold">Create A New Address</div>
      <form className="my-6 grid gap-6">
        {/* Name */}
        <div className="mb-4 ">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            className="rounded-md w-full py-2 px-2  "
            placeholder="Your name"
          />
        </div>
        {/* Province */}
        <div className="mb-4 ">
          <label htmlFor="province">Province</label>
          <select name="" id="" className="w-full rounded-md py-2 px-2 ">
            <option value="">Jawa Barat</option>
            <option value="">Jakarta</option>
          </select>
        </div>
        {/* City */}
        <div className="mb-4 ">
          <label htmlFor="city">City</label>
          <select name="" id="" className="w-full rounded-md py-2 px-2 ">
            <option value="">Bogor</option>
            <option value="">Jakarta</option>
          </select>
        </div>
        {/* Village */}
        <div className="mb-4 ">
          <label htmlFor="village">Village</label>
          <select name="" id="" className="w-full rounded-md py-2 px-2 ">
            <option value="">Gunung Sindur</option>
            <option value="">Parung</option>
          </select>
        </div>
        {/* Detail Street */}
        <div className="mb-4 col-span-2 ">
          <label htmlFor="Detail">Detail</label>
          <textarea
            name=""
            placeholder="Taman sari bukit damai A10/23"
            className="w-full h-full p-2 rounded-lg"
          ></textarea>
        </div>
        <button className="bg-primary py-2 px-2 text-lg font-yantramanav rounded-lg text-white hover:bg-secondary">
          Set Address
        </button>
      </form>
    </div>
  );
}
