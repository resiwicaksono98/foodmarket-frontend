import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CartMiddleware({ children }) {
  const navigate = useNavigate();
  const { items, isLoading, isError } = useSelector((state) => state.cart);

  useEffect(() => {
    if (items.length === 0) {
      navigate("/");
    }
  }, []);

  return <div>{children}</div>;
}
