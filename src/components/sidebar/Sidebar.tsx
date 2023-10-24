import List from "../list/List";

export default function Sidebar() {
  var pagesList = {
    addTicket : 'addTicket',
    updateDeleteTicket : 'updateDeleteTicket',
    statisticalData : 'statisticalData'
  }

  return (
    <div className="flex">
      <div className="h-screen bg-gradient-to-l from-orange-500 to-gray-500 rounded-r-lg">
      
        <div className="flex p-7 items-center">
          <img
            src="../../src/images/admin.png"
            alt="Admin Photo"
            className="rounded-full w-20"
          />
          <h2 className="text-xl font-semibold text-white ml-4 text-end">Admin Ad - Soyad</h2>
        </div>
        <List pagesList={pagesList}/>
      </div>
    </div>
  );
}
