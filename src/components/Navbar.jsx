import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/icons/Logo.png";
import Cart from "../assets/icons/Cart-Navbar.png";
import { Menu } from "@headlessui/react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { authRequest } from "../utils/axiosInstance";
import { useEffect } from "react";
import { getCurrentCart } from "../features/cartSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { countOrder, items } = useSelector((state) => state.cart);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(getCurrentCart());
    }
  }, []);

  const logoutUser = async () => {
    try {
      await authRequest.post("/logout");
      alert("Logout Success");
      navigate(0);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="md:flex p-4  items-center justify-between text-white bg-primary ">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          },
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className=" md:flex  items-center"
      >
        <Link
          to={"/"}
          className="flex items-center w-full justify-center font-yantramanav gap-4 cursor-pointer"
        >
          <img src={Logo} alt="logo" />
          <div className="text-2xl  md:text-[25px] font-semibold">
            Wak Burger Bar
          </div>
        </Link>
      </motion.div>
      {/* Login And Register */}
      <div
        className={`mt-4 md:mt-0 flex justify-center gap-4 font-yantramanav ${
          user ? "hidden" : ""
        }`}
      >
        <Link
          to={"/login"}
          className="py-1 px-3 bg-white text-secondary text-xl rounded-[8px] cursor-pointer font-semibold hover:bg-lightBlue hover:text-white  "
        >
          Login
        </Link>
        <Link
          to={"/register"}
          className="py-1 px-3 bg-lightBlue text-white text-xl rounded-[8px] cursor-pointer font-semibold hover:bg-white hover:text-secondary "
        >
          Register
        </Link>
      </div>
      {/* Profile And Cart */}
      <div
        className={`mt-4 md:mt-0 flex justify-center items-center gap-4 font-yantramanav ${
          !user ? "hidden" : ""
        }`}
      >
        <Link to={"/cart"}>
          <div className="absolute ml-5 -mt-1 h-5 w-5 bg-lightBlue rounded-full text-center text-sm ">
            {countOrder ? countOrder : 0}
          </div>
          <img src={Cart} alt="" className="h-9" />
        </Link>
        <Menu>
          <Menu.Button className={"flex items-center gap-2"}>
            {" "}
            <img
              src="https://pbs.twimg.com/profile_images/1392292811790331904/RLBAgHDt_400x400.jpg"
              alt="profile"
              className="h-10 w-10 rounded-full cursor-pointer "
            />
          </Menu.Button>
          {/* Menu Items */}
          <Menu.Items
            className={
              "absolute z-20 flex flex-col top-[4rem] right-2 bg-white text-primary drop-shadow-xl  p-5 w-1/6 rounded-lg shadow-lg "
            }
          >
            {/* My orders */}
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={`text-lg text-center tracking-wide ${
                    active && "underline"
                  }`}
                  to="/my-order"
                >
                  My Orders
                </Link>
              )}
            </Menu.Item>
            {/* Account Settings */}
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={`text-lg text-center tracking-wide ${
                    active && "underline"
                  }`}
                  to="/account-settings"
                >
                  Account Settings
                </Link>
              )}
            </Menu.Item>
            <div className="border my-2"></div>
            {/* Logout */}
            <Menu.Item>
              {({ active }) => (
                <div
                  className={`text-lg text-center tracking-wide cursor-pointer  ${
                    active && "underline"
                  }`}
                  onClick={logoutUser}
                >
                  Logout
                </div>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
}
