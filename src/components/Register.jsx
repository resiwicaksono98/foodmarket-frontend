import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="bg-lightBlue min-h-screen">
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-primary mx-4 md:mx-0 md:w-4/6 lg:w-3/6 text-center rounded-xl  p-14">
          <div className="font-merriweatherSans text-3xl font-semibold text-white tracking-wider">
            Sign Up
          </div>
          <form className="mt-12 md:mx-3">
            {/* Fullname */}
            <div className="flex gap-4 justify-center items-center mb-6">
              <div className="h-6 w-6 bg-secondary rounded-full"></div>
              <input
                type="text"
                className="rounded-lg py-1 px-3 pt-2 w-2/3"
                placeholder="Fullname"
              />
            </div>
            {/* Email */}
            <div className="flex gap-4 justify-center items-center mb-6">
              <div className="h-6 w-6 bg-secondary rounded-full"></div>
              <input
                type="text"
                className="rounded-lg py-1 px-3 pt-2 w-2/3"
                placeholder="Email"
              />
            </div>
            {/* Password */}
            <div className="flex gap-4 justify-center items-center mb-6">
              <div className="h-6 w-6 bg-secondary rounded-full"></div>
              <input
                type="password"
                className="rounded-lg py-1 px-3 pt-2 w-2/3"
                placeholder="Password"
              />
            </div>
            <div className="md:flex flex-wrap gap-8 mt-10 items-center justify-center font-biryani">
              <button className="bg-secondary text-lg py-2 pt-3 px-4 rounded-lg text-white  hover:bg-lightBlue">
                Sign Up
              </button>
              <div className="text-slate-300 mt-4 md:mt-0 text-sm tracking-wide ">
                Already Have Account?{" "}
                <Link
                  to={"/login"}
                  className="text-lightBlue hover:underline hover:text-secondary"
                >
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
