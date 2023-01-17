import { createBrowserRouter, useNavigate } from "react-router-dom";
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
import DeliveryAddress from "./pages/DeliveryAddress";
import { AuthMiddleware } from "./middleware/AuthMiddleware";
import CartMiddleware from "./middleware/CartMiddleware";
import MyOrder from "./pages/MyOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthMiddleware>
        <Homepage />
      </AuthMiddleware>
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
      <AuthMiddleware>
        <Order />,
      </AuthMiddleware>
    ),
  },
  {
    path: "/delivery-address",
    element: (
      <AuthMiddleware>
        <CartMiddleware>
          <DeliveryAddress />
        </CartMiddleware>
      </AuthMiddleware>
    ),
  },
  {
    path: "/payment/:orderId",
    element: (
      <AuthMiddleware>
        <PaymentUser />
      </AuthMiddleware>
    ),
  },
  {
    path: "/invoice/:order_id",
    element: (
      <AuthMiddleware>
        <InvoiceOrder />
      </AuthMiddleware>
    ),
  },
  {
    path: "/my-order",
    element: (
      <AuthMiddleware>
        <MyOrder />
      </AuthMiddleware>
    ),
  },
  //   Accoutn Setting
  {
    path: "/account-settings",

    element: (
      <AuthMiddleware>
        <AccountSetting />
      </AuthMiddleware>
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
