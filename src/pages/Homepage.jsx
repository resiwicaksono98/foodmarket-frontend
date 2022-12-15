import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Layout from "../components/Layout";

export default function Homepage() {
  return (
    <Layout>
      <Home />
      <Footer />
    </Layout>
  );
}
