import { createBrowserRouter, useNavigate } from "react-router-dom";
import Sidebar from "./components/account/Sidebar";
import Address from "./components/account/Address";
import Login from "./components/Login";
import Register from "./components/Register";
import AccountSetting from "./pages/AccountSetting";
import Homepage from "./pages/Homepage";
import InvoiceOrder from "./pages/InvoiceOrder";
import Order from "./pages/Order";
import PaymentUser from "./pages/PaymentUser";
import Profile from "./components/account/Profile";
import NewAddress from "./components/account/NewAddress";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkUserLogin } from "./features/authSlice";

const Auth = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkUserLogin());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center animate-spin">
        Loading....
      </div>
    );
  }

  return <div>{children}</div>;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Auth>
        <Homepage />
      </Auth>
    ),
  },
  //   auth
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  //   Orders
  {
    path: "/cart",
    element: (
      <Auth>
        <Order />,
      </Auth>
    ),
  },
  {
    path: "/payment/:id",
    element: (
      <Auth>
        <PaymentUser />
      </Auth>
    ),
  },
  {
    path: "/invoice/:id",
    element: (
      <Auth>
        <InvoiceOrder />
      </Auth>
    ),
  },
  //   Accoutn Setting
  {
    path: "/account-settings",

    element: (
      <Auth>
        <AccountSetting />
      </Auth>
    ),
    children: [
      { path: "", element: <Profile /> },
      {
        path: "address",
        element: <Address />,
      },
      {
        path: "address/new",
        element: <NewAddress />,
      },
    ],
  },
]);

export default router;
