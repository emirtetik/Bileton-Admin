import List from "../list/List";

export default function Sidebar() {
  var pagesList = {
    addTicket: "addTicket",
    updateDeleteTicket: "updateDeleteTicket",
    statisticalData: "statisticalData",
  };

  return (
    <div className="flex sticky top-0 h-screen">
      <div className="bg-gradient-to-l from-orange-500 to-gray-500 rounded-r-lg">
        <div className="flex p-7 items-center">
          <a href="/">
            <img
              src="../../src/images/admin.png"
              alt="Admin Photo"
              className="rounded-full w-20"
            />
          </a>
          <a href="/">
            <h2 className="text-xl font-semibold text-white ml-4 text-end">
              Admin Ad - Soyad
            </h2>
          </a>
        </div>
        <List pagesList={pagesList} />
      </div>
    </div>
  );
}
