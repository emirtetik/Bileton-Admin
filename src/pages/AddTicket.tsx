import Form from "../components/form/Form";
import Sidebar from "../components/sidebar/Sidebar";

export default function AddTicket() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-3/4">
        <h1 className="text-xl font-extrabold text-center my-10 ml-16 uppercase bg-orange-500 py-4 max-w-7xl">
          Yeni Bir Etkinlik Ekle
        </h1>
        <Form />
      </div>
    </div>
  );
}
