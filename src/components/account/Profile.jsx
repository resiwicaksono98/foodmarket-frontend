import React from "react";

export default function Profile() {
  return (
    <div className="p-8">
      <div className="text-lg font-semibold">Edit Your Profile</div>
      <form className="my-6 grid gap-6">
        {/* Fullname */}
        <div>
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            className="rounded-md w-full py-2 px-2  "
            placeholder="Your name"
          />
        </div>
        {/* Email */}
        <div className="mb-4 ">
          <label htmlFor="fullname">Email</label>
          <input
            type="email"
            className="rounded-md w-full py-2 px-2  "
            placeholder="Your name"
          />
        </div>
        {/* Password */}
        <div className="mb-4 ">
          <label htmlFor="fullname">Password</label>
          <input
            type="password"
            className="rounded-md w-full py-2 px-2  "
            placeholder="Your name"
          />
        </div>

        <button className="bg-primary py-2 px-2 text-lg font-yantramanav rounded-lg text-white hover:bg-secondary">
          Set Profile
        </button>
      </form>
    </div>
  );
}
