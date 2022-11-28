import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/account/Sidebar";
import Layout from "../components/Layout";

export default function AccountSetting() {
  return (
    <Layout>
      <div className=" md:grid md:grid-cols-8   gap-8 my-8 mx-8 ">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-6 bg-slate-200 rounded-lg">
          <Outlet />
        </div>
      </div>
    </Layout>
  );
}
