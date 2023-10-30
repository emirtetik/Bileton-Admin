import Table from "../components/tables/Table";

export default function UpdateDeleteTicket() {
  return (
    <div className="flex">
      <div className="w-3/4">
        <h1 className="py-4 my-10 ml-16 text-xl font-extrabold text-center uppercase bg-orange-500 max-w-7xl">Tum Aktiviteler</h1>
        <Table />
      </div>
    </div>
  );
}
