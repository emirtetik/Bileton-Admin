import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Table from "../components/tables/Table";

export default function UpdateDeleteTicket() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-3/4">
        <h1 className="text-xl font-extrabold text-center my-10 uppercase ml-16 bg-orange-500 py-4 max-w-7xl">Tum Aktiviteler</h1>
        <Table />
      </div>
    </div>
  );
}
