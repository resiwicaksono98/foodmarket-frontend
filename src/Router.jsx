import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Homepage from "./pages/Homepage";
import InvoiceOrder from "./pages/InvoiceOrder";
import Order from "./pages/Order";
import PaymentUser from "./pages/PaymentUser";

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
]);

export default router;
