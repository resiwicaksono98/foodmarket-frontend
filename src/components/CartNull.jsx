import React from "react";
import { Link } from "react-router-dom";

export default function CartNull() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold text-gray-700 mb-6">
          404 - Halaman tidak ditemukan karena anda belum memesan apapun
        </h1>
        <p className="text-gray-700 text-base">
          Maaf, halaman yang Anda cari tidak ditemukan. Silakan kembali ke{" "}
          <Link to="/" className="underline ">
            halaman utama
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
