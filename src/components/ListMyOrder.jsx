import { Dialog, Transition } from "@headlessui/react";
import moment from "moment";
import { useEffect, useState, Fragment } from "react";
import instanceRequest from "../utils/axiosInstance";
import Button from "./atom/Button";

export default function ListMyOrder() {
  const [orders, setOrders] = useState([]);
  const [invoiceId, setInvoiceId] = useState();
  const [invoices, setInvoices] = useState([]);
  const { delivery_address, delivery_fee, sub_total, total, payment_status } =
    invoices;
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getOrders = async () => {
      const { data } = await instanceRequest.get("/orders");
      setOrders(data.data);
    };
    if (invoiceId) {
      const getInvoice = async () => {
        const { data } = await instanceRequest.get(`/invoice/${invoiceId}`);
        setInvoices(data);
      };
      getInvoice();
    }
    getOrders();
  }, [invoiceId]);
  return (
    <div className="mx-8 py-8">
      <div className="text-2xl font-yantramanav font-semibold ">
        Your Orders
      </div>
      <table className="table-auto w-full my-12 border-collapse border border-slate-400">
        <thead>
          <tr>
            <th className="border border-slate-300">Order Number</th>
            <th className="border border-slate-300">Items</th>
            <th className="border border-slate-300">Created At</th>
            <th className="border border-slate-300">Status</th>
            <th className="border border-slate-300">Action</th>
          </tr>
        </thead>
        <tbody className="text-center ">
          {orders.map((order, i) => (
            <tr key={i}>
              <td className="border border-slate-300 p-3">
                #{order.order_number}
              </td>
              <td className="border border-slate-300 p-3">
                {order.order_items?.map((item, i) => (
                  <div key={i}>
                    {item.name} x {item.qty}
                  </div>
                ))}
              </td>
              <td className="border border-slate-300 p-3">
                {moment(order.createdAt).format("MMMM D YYYY, h:mm")}
              </td>
              <td className="border border-slate-300 p-3">{order.status}</td>
              <td className=" border border-slate-300 p-3">
                <div className="flex justify-center gap-4">
                  <Button name={"Invoice"} to={`/invoice/${order._id}`} />
                  <Button
                    name={"Detail"}
                    classname={"bg-green-500 hover:bg-green-400"}
                    onClick={() => {
                      setIsOpen(!isOpen);
                      setInvoiceId(order._id);
                    }}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modal Detail */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Detail Your Order
                  </Dialog.Title>
                  <div className="my-6">
                    <div className="grid grid-cols-2 gap-2 antialiased">
                      {/* Delivery Address */}
                      <div>Delivery Address</div>
                      <div className="font-semibold">
                        {" "}
                        : {delivery_address?.detail}{" "}
                        {delivery_address?.kelurahan}{" "}
                        {delivery_address?.kecamatan}{" "}
                        {delivery_address?.kabupaten}{" "}
                        {delivery_address?.provinsi}
                      </div>
                      {/* Delivery Fee */}
                      <div>Delivery Fee</div>
                      <div className="font-semibold">
                        {" "}
                        : IDR. {delivery_fee}
                      </div>
                      {/* Subtotal */}
                      <div>SubTotal</div>
                      <div className="font-semibold"> : IDR. {sub_total}</div>
                      {/* Total */}
                      <div>Total</div>
                      <div className="font-semibold"> : IDR. {total}</div>
                      {/* Payment Status */}
                      <div>Payment Status</div>
                      <div className="font-semibold"> : {payment_status}</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
