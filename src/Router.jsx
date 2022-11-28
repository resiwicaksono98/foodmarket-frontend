import { createBrowserRouter } from "react-router-dom";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
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
    element: <Order />,
  },
  {
    path: "/payment/:id",
    element: <PaymentUser />,
  },
  {
    path: "/invoice/:id",
    element: <InvoiceOrder />,
  },
  //   Accoutn Setting
  {
    path: "/account-settings",

    element: <AccountSetting />,
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
