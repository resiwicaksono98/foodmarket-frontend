import React from "react";
import { Link } from "react-router-dom";

export default function Address() {
  return (
    <div>
      <div className="p-6 font-yantramanav">
        <Link
          to={"new"}
          className="bg-primary py-2 px-3 rounded-lg text-white hover:bg-secondary "
        >
          Add A New Address
        </Link>
        <table className="table-auto w-full my-6 text-xs md:text-base">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>1</td>
              <td>Resi Wicaksono</td>
              <td className="w-4/6 px-6">
                Taman Sari Bukit Damai A10/23 Gunung Sindur Bogor
              </td>
              <td>
                <button className="bg-primary py-2 px-3 rounded-lg text-white w-full hover:bg-secondary">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
