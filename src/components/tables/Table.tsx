import React from "react";

export default function Table() {
  return (
    <div className="ml-16 max-w-7xl rounded-lg shadow-md p-4 border">
      <div>
        <input
          type="text"
          className="p-2 mb-4 rounded border"
          placeholder="Ara..."
        />
      </div>
      <table className="table-fixed  -slate-400 bg-white">
        <thead>
          <tr>
            <th className=" bg-orange-500 text-white p-4 text-center rounded-l-lg"></th>
            <th className=" bg-orange-500 text-white p-4 text-center">
              Category
            </th>
            <th className=" bg-orange-500 text-white p-4 text-center">
              Etkinlik Adi
            </th>
            <th className=" bg-orange-500 text-white p-4 text-center">
              Bilet Satis Tarihleri
            </th>
            <th className=" bg-orange-500 text-white p-4 text-center">
              Etkinlik Tarihi
            </th>
            <th className=" bg-orange-500 text-white p-4 text-center">
              Etkinlik Yeri
            </th>
            <th className=" bg-orange-500 text-white p-4 text-center">
              Guncelle
            </th>
            <th className=" bg-orange-500 text-white p-4 text-center rounded-r-lg">
              Sil
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=" text-gray-500 p-2 text-center font-semibold">1</td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              Muzik / Rock
            </td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              Erciyes Acik Hava Konseri
            </td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              13/10/2023 - 18/10/2023
            </td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              29/10/2023
            </td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              Erciyes Üniversitesi Marianne Molu Anfisi - KAYSERI
            </td>
            <td className=" text-gray-500 p-2 text-center">
              <button className="border-collapse border border-slate-300 p-1 rounded-md -slate-300 bg-white font-bold hover:bg-white hover:border-orange-500 hover:text-orange-500">
                Guncelle
              </button>
            </td>
            <td className=" text-gray-500 p-2 text-center">
              <button className="border-collapse border border-slate-300 p-1 rounded-md -slate-300 bg-white font-bold hover:bg-white hover:border-orange-500 hover:text-orange-500">
                Sil
              </button>
            </td>
          </tr>
          <tr>
            <td className=" text-gray-500 p-2 text-center font-semibold">2</td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              Muzik / Rock
            </td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              Erciyes Acik Hava Konseri
            </td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              13/10/2023 - 18/10/2023
            </td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              29/10/2023
            </td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              Erciyes Üniversitesi Marianne Molu Anfisi - KAYSERI
            </td>
            <td className=" text-gray-500 p-2 text-center">
              <button className="border-collapse border border-slate-300 p-1 rounded-md -slate-300 bg-white font-bold hover:bg-white hover:border-orange-500 hover:text-orange-500">
                Guncelle
              </button>
            </td>
            <td className=" text-gray-500 p-2 text-center">
              <button className="border-collapse border border-slate-300 p-1 rounded-md -slate-300 bg-white font-bold hover:bg-white hover:border-orange-500 hover:text-orange-500">
                Sil
              </button>
            </td>
          </tr>
          <tr>
            <td className=" text-gray-500 p-2 text-center font-semibold">3</td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              Muzik / Rock
            </td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              Erciyes Acik Hava Konseri
            </td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              13/10/2023 - 18/10/2023
            </td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              29/10/2023
            </td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              Erciyes Üniversitesi Marianne Molu Anfisi - KAYSERI
            </td>
            <td className=" text-gray-500 p-2 text-center">
              <button className="border-collapse border border-slate-300 p-1 rounded-md -slate-300 bg-white font-bold hover:bg-white hover:border-orange-500 hover:text-orange-500">
                Guncelle
              </button>
            </td>
            <td className=" text-gray-500 p-2 text-center">
              <button className="border-collapse border border-slate-300 p-1 rounded-md -slate-300 bg-white font-bold hover:bg-white hover:border-orange-500 hover:text-orange-500">
                Sil
              </button>
            </td>
          </tr>
          <tr>
            <td className=" text-gray-500 p-2 text-center font-semibold">4</td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              Muzik / Rock
            </td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              Erciyes Acik Hava Konseri
            </td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              13/10/2023 - 18/10/2023
            </td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              29/10/2023
            </td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              Erciyes Üniversitesi Marianne Molu Anfisi - KAYSERI
            </td>
            <td className=" text-gray-500 p-2 text-center">
              <button className="border-collapse border border-slate-300 p-1 rounded-md -slate-300 bg-white font-bold hover:bg-white hover:border-orange-500 hover:text-orange-500">
                Guncelle
              </button>
            </td>
            <td className=" text-gray-500 p-2 text-center">
              <button className="border-collapse border border-slate-300 p-1 rounded-md -slate-300 bg-white font-bold hover:bg-white hover:border-orange-500 hover:text-orange-500">
                Sil
              </button>
            </td>
          </tr>
          <tr>
            <td className=" text-gray-500 p-2 text-center font-semibold">5</td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              Muzik / Rock
            </td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              Erciyes Acik Hava Konseri
            </td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              13/10/2023 - 18/10/2023
            </td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              29/10/2023
            </td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              Erciyes Üniversitesi Marianne Molu Anfisi - KAYSERI
            </td>
            <td className=" text-gray-500 p-2 text-center">
              <button className="border-collapse border border-slate-300 p-1 rounded-md -slate-300 bg-white font-bold hover:bg-white hover:border-orange-500 hover:text-orange-500">
                Guncelle
              </button>
            </td>
            <td className=" text-gray-500 p-2 text-center">
              <button className="border-collapse border border-slate-300 p-1 rounded-md -slate-300 bg-white font-bold hover:bg-white hover:border-orange-500 hover:text-orange-500">
                Sil
              </button>
            </td>
          </tr>
          <tr>
            <td className=" text-gray-500 p-2 text-center font-semibold">6</td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              Muzik / Rock
            </td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              Erciyes Acik Hava Konseri
            </td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              13/10/2023 - 18/10/2023
            </td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              29/10/2023
            </td>
            <td className=" text-gray-500 p-2 text-center font-semibold">
              Erciyes Üniversitesi Marianne Molu Anfisi - KAYSERI
            </td>
            <td className=" text-gray-500 p-2 text-center">
              <button className="border-collapse border border-slate-300 p-1 rounded-md -slate-300 bg-white font-bold hover:bg-white hover:border-orange-500 hover:text-orange-500">
                Guncelle
              </button>
            </td>
            <td className=" text-gray-500 p-2 text-center">
              <button className="border-collapse border border-slate-300 p-1 rounded-md -slate-300 bg-white font-bold hover:bg-white hover:border-orange-500 hover:text-orange-500">
                Sil
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
