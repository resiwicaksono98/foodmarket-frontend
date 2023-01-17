/** @format */

import React from "react";
import NavigateBack from "./atom/NavigateBack";
import AddCounter from "../assets/icons/AddCounter.png";
import Minus from "../assets/icons/Minus.png";
import Burger1 from "../assets/images/Burger1.png";
import Button from "./atom/Button";
import { useDispatch, useSelector } from "react-redux";
import { decrementCart, getCurrentCart, incrementCart, updateCart } from "../features/cartSlice";
import CartNull from "./CartNull";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "./atom/Toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cart() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { items, subTotal, isLoading, shipping, message } = useSelector((state) => state.cart);

   const newSubTotal = items.reduce((prev, curr) => prev + curr.price, 0);
   const total = newSubTotal ? newSubTotal + shipping : subTotal + shipping;

   useEffect(() => {
      if (items.length === 0) {
         dispatch(getCurrentCart());
      }
   }, []);

   const handleSubmit = async () => {
      dispatch(updateCart(items)).then((data) => {
         if (data.payload) {
            Toast({ type: "success", message: "Success save your cart" });
            setTimeout(() => {
               navigate(`/delivery-address`);
            }, 1500);
         }
      });
   };

   if (isLoading) {
      return <div className="h-screen flex items-center justify-center">Loading....</div>;
   }

   return (
      <>
         {items.length !== 0 ? (
            <div className="mx-8 py-8">
               <ToastContainer />
               {/* Back and address */}
               <div className="md:flex gap-4   py-5 items-center font-yantramanav text-primary">
                  <NavigateBack to={"/"} classname={"justify-center"} />
                  <div className="text-3xl font-semibold text-center mt-3 md:mt-0 w-full  tracking-wider">Your Order</div>
               </div>
               {/* List Orders */}
               {items.map((item, i) => (
                  <div className="flex gap-8 md:gap-28 mt-16 justify-center items-center" key={i}>
                     {/* Counter Add*/}
                     <div
                        onClick={() =>
                           dispatch(
                              incrementCart({
                                 id: item._id,
                                 name: item.name,
                              })
                           )
                        }
                     >
                        <img src={AddCounter} alt="addCounter" className="h-10 w-10 cursor-pointer" />
                     </div>
                     {/* Menu Desc */}
                     <div className="md:flex gap-8 items-center">
                        <div className="flex justify-center mb-4 md:mb-0">
                           <div className="absolute ml-14 -mt-2 h-8 w-8 bg-white border rounded-full flex pt-1 items-center justify-center border-primary">{item.qty}</div>
                           <img src={`https://wakburgerbar-api.cyclic.app/images/products/${item.image_url}`} alt="burger1" className="h-20 w-20 rounded-lg" />
                        </div>
                        <div className="flex-col  text-center">
                           <div className="mb-2 md:mb-4 font-yantramanav font-semibold text-xl">{item.name}</div>
                           <div className="font-biryani mb-2 md:mb-0 text-sm text-slate-500">Note: Extra pedas</div>
                        </div>
                        <div className="font-yantramanav font-semibold text-xl text-primary text-center md:ml-[2rem]">IDR. {item.product.price * item.qty} </div>
                     </div>
                     {/* Counter Remove */}
                     <div
                        onClick={() =>
                           dispatch(
                              decrementCart({
                                 id: item._id,
                                 name: item.name,
                              })
                           )
                        }
                     >
                        <img src={Minus} alt="delete" className="h-10 w-10 cursor-pointer" />
                     </div>
                  </div>
               ))}

               {/* Total Price */}
               <div className="mt-12 lg:mx-[20rem]">
                  <div className="border"></div>
                  {/* Subtotal */}
                  <div className="px-16 pt-10 flex justify-between font-yantramanav text-xl font-semibold ">
                     <div>Sub Total</div>
                     <div>IDR. {newSubTotal ? newSubTotal : subTotal}</div>
                  </div>
                  {/* Shipping */}
                  <div className="px-16 pt-10 flex justify-between font-yantramanav text-xl font-semibold ">
                     <div>Shipping</div>
                     <div>IDR. {shipping}</div>
                  </div>
                  <div className="border mt-12"></div>
                  {/* Total */}
                  <div className="px-16 pt-10 flex justify-between font-yantramanav text-xl font-semibold ">
                     <div>Total</div>
                     <div>IDR. {total}</div>
                  </div>
                  <button className="mt-10 bg-primary py-2 px-2 rounded-lg text-white w-full font-yantramanav text-lg hover:bg-secondary" onClick={handleSubmit}>
                     Checkout
                  </button>
               </div>
            </div>
         ) : (
            <CartNull />
         )}
      </>
   );
}
