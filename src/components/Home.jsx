import React from "react";
import Burger1 from "../assets/images/Burger1.png";
import Burger2 from "../assets/images/Burger2.png";
import Hotdog1 from "../assets/images/Hotdog1.png";
import CartBuy from "../assets/icons/Cart-Card.png";
import BurgerIcon from "../assets/icons/Burger.png";
import HotdogIcon from "../assets/icons/HotDog.png";
import DrinkIcon from "../assets/icons/Drink.png";
import OtherIcon from "../assets/icons/Other.png";
import { domAnimation, LazyMotion, motion } from "framer-motion";

export default function Home() {
  const categories = [
    { name: "Burger", icon: BurgerIcon },
    { name: "Hotdog", icon: HotdogIcon },
    { name: "Drink", icon: DrinkIcon },
    { name: "Other", icon: OtherIcon },
  ];
  return (
    <div className="mx-8 py-8">
      <div className="grid md:grid-cols-5 xl:grid-cols-4 gap-4">
        {/* Left */}
        <div className="col-span-3 xl:col-span-3">
          {/* Only For You */}
          <div className="md:flex flex-wrap items-center gap-4 font-yantramanav">
            <div className="text-2xl font-medium">Only For You : </div>
            <div className="flex flex-wrap gap-4">
              <button className="bg-secondary text-white md:text-xl py-2 px-3 rounded-xl hover:bg-primary">
                Happy Hour
              </button>
              <button className="bg-secondary text-white md:text-xl py-2 px-3 rounded-xl hover:bg-primary">
                Signature Dish
              </button>
              <button className="bg-secondary text-white md:text-xl py-2 px-3 rounded-xl hover:bg-primary">
                Blue-plate special
              </button>
            </div>
          </div>
          {/* Menu Card List */}
          <div className="my-8 md:mx-8 flex  flex-wrap gap-16">
            <div className=" bg-primary rounded-lg text-white   md:max-w-[20rem] drop-shadow-[0px_0px_8px_#007EA7]  ">
              <img
                src={Burger1}
                alt=""
                className=" md:h-[16rem] rounded-lg w-full"
              />
              <div className="p-6 font-yantramanav">
                <div className="text-2xl text-center font-semibold">
                  Double Smoke Beef
                </div>
                <div className="text-slate-500 text-sm text-center my-2 ">
                  Two beef burger cooked with smoke added with cheese produce a
                  savory taste
                </div>
                <div className="flex mt-10 items-center justify-between ">
                  <div className="text-xl font-semibold tracking-wider">
                    IDR. 25.000
                  </div>
                  <div className="bg-slate-400 hover:bg-white px-2 py-1 rounded-lg cursor-pointer">
                    <img src={CartBuy} alt="cart-buy" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-primary rounded-lg text-white  md:max-w-[20rem] drop-shadow-[0px_0px_8px_#007EA7]  ">
              <img
                src={Hotdog1}
                alt=""
                className="h-[16rem] rounded-lg w-full"
              />
              <div className="p-6 font-yantramanav">
                <div className="text-2xl text-center font-semibold">
                  Hotdog Monster
                </div>
                <div className="text-slate-500 text-sm text-center my-2 ">
                  Hotdog with selected meet added with sauce mustard
                </div>
                <div className="flex mt-10 items-center justify-between ">
                  <div className="text-xl font-semibold tracking-wider">
                    IDR. 35.000
                  </div>
                  <div className="bg-slate-400 hover:bg-white px-2 py-1 rounded-lg cursor-pointer">
                    <img src={CartBuy} alt="cart-buy" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-primary rounded-lg text-white  md:max-w-[20rem] drop-shadow-[0px_0px_8px_#007EA7]  ">
              <img
                src={Burger2}
                alt=""
                className="h-[16rem] rounded-lg w-full"
              />
              <div className="p-6 font-yantramanav">
                <div className="text-2xl text-center font-semibold">
                  Double CheeseBurger
                </div>
                <div className="text-slate-500 text-sm text-center my-2 ">
                  Three beef burger perfectly cooked with cheese on each layer
                  produce produce a different taste in each of its layers
                </div>
                <div className="flex mt-10 items-center justify-between ">
                  <div className="text-xl font-semibold tracking-wider">
                    IDR. 30.000
                  </div>
                  <div className="bg-slate-400 hover:bg-white px-2 py-1 rounded-lg cursor-pointer">
                    <img src={CartBuy} alt="cart-buy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="hidden col-span-2 xl:col-span-1 md:block  font-yantramanav">
          {/* Category */}
          <div className="bg-primary p-6 border-t-8 border-secondary text-white rounded-lg drop-shadow-[8px_8px_0px_#007EA7]">
            <div className="text-xl font-semibold">CATEGORIES</div>
            <ul className="my-4 px-3 text-lg ">
              {categories.map((category, i) => (
                <li
                  className="hover:underline flex gap-3 cursor-pointer pb-4"
                  key={i}
                >
                  <img src={category.icon} alt={category.name} />
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
          {/* Top Selleers */}
          <div className="my-[53px] bg-primary p-6 border-t-8 border-secondary text-white rounded-lg drop-shadow-[8px_8px_0px_#007EA7]">
            <div className="text-xl font-semibold">TOP SELLERS</div>
            {/* Card List  */}
            <div className="my-6 flex gap-3 items-center font-biryani opacity-80 hover:opacity-100">
              <img
                src={Burger1}
                alt="burger1"
                className="h-14 w-14 rounded-full"
              />
              <div className="grid grid-rows-2 gap-2 cursor-pointer ">
                <div>Triple Cheeseburger</div>
                <div className="text-lightBlue hover:underline">
                  IDR. 30.000
                </div>
              </div>
            </div>
            <div className="my-6 flex gap-3 items-center font-biryani opacity-80 hover:opacity-100">
              <img
                src={Burger2}
                alt="burger2"
                className="h-14 w-14 rounded-full"
              />
              <div className="grid grid-rows-2 gap-2 cursor-pointer ">
                <div>Double Smoke Beef</div>
                <div className="text-lightBlue hover:underline">
                  IDR. 25.000
                </div>
              </div>
            </div>
            <div className="my-6 flex gap-3 items-center font-biryani opacity-80 hover:opacity-100">
              <img
                src={Hotdog1}
                alt="hotdog1"
                className="h-14 w-14 rounded-full"
              />
              <div className="grid grid-rows-2 gap-2 cursor-pointer ">
                <div>Hotdog Monster</div>
                <div className="text-lightBlue hover:underline">
                  IDR. 35.000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
