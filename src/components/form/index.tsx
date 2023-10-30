
export default function Form() {
  return (
    <div className="p-4 bg-black border rounded-lg shadow-md ">
      
      <form action="#"> 
        <div className="flex justify-between">
          <label htmlFor="category" className="font-bold ">
            Etkinlik Kategorisini Seciniz :
          </label>
          <select
            name="category"
            id="category"
            className="w-3/4 p-2 mb-4 text-black border rounded"
          >
            <option value="music">Muzik</option>
            <option value="theatre">Tiyatro</option>
            <option value="cinema">Sinema</option>
            <option value="concert">Konser</option>
          </select>
        </div>
        <div className="flex justify-between">
          <label htmlFor="name" className="font-bold">
            Etkinligin Adini Giriniz :
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-3/4 p-2 mb-4 text-black border rounded"
          />
        </div>
        <div className="flex justify-between ">
          <label htmlFor="salesDateTicket" className="font-bold">
            Bilet Satis Tarihlerini Seciniz :
          </label>
          <input
            type="date"
            name="salesDateTicket"
            id="salesDateTicket"
            className="w-3/4 p-2 mb-4 text-black border rounded"
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="activityDate" className="font-bold">
            Etkinligin Tarihini Giriniz :
          </label>
          <input
            type="date"
            name="activityDate"
            id="activityDate"
            className="w-3/4 p-2 mb-4 text-black border rounded"
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="city" className="font-bold">
            Etkinligin Yapilacagi Ili Seciniz :
          </label>
          <select
            name="city"
            id="city"
            className="w-3/4 p-2 mb-4 text-black border rounded"
          >
            <option value="Istanbul">Istanbul</option>
            <option value="Ankara">Ankara</option>
            <option value="Izmir">Izmir</option>
          </select>
        </div>
        <div className="flex justify-between">
          <label htmlFor="activityPlace" className="font-bold">
            Etkingilin Yapilacagi Alani Seciniz :
          </label>
          <select
            name="city"
            id="city"
            className="w-3/4 p-2 mb-4 text-black border rounded"
          >
            <option value="Erciyes Üniversitesi Marianne Molu Anfisi ">
              Erciyes Üniversitesi Marianne Molu Anfisi{" "}
            </option>
            <option value="Kayseri Parasut Inme Alani">
              Kayseri Parasut Inme Alani
            </option>
            <option value="Goreme Konser Alani">Goreme Konser Alani</option>
            <option value="Bostanci Gosteri Merkezi">
              Bostanci Gosteri Merkezi
            </option>
            <option value="Kadikoy Sahne">Kadikoy Sahne</option>
          </select>
        </div>
        <div className="grid justify-items-stretch ">
          <input
            type="submit"
            name="submit"
            id="submit"
            value="Urunu Ekle"
            className="p-1 text-lg font-bold text-black bg-white border-2 border-collapse rounded-md justify-self-end border-slate-300 hover:bg-white hover:border-orange-500 hover:text-orange-500"
          />
        </div>
      </form>
    </div>
  );
}
