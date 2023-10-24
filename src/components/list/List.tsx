import { Link } from "react-router-dom";

type PagesListType = {
  addTicket: string;
  updateDeleteTicket: string;
  statisticalData: string;
};

interface ListProps {
  pagesList: PagesListType;
}

export default function List({ pagesList }: ListProps) {
  return (
    <div className="pl-10">
      <ul className="list-none text-white text-xl font-semibold">
        <li className="py-2">
          <Link to={pagesList.addTicket}>Bilet Ekle</Link>
        </li>
        <li className="py-2">
          <Link to={pagesList.updateDeleteTicket}>Bilet Güncelle - Sil</Link>
        </li>
        <li className="py-2">
          <Link to={pagesList.statisticalData}>İstatistik Veriler</Link>
        </li>
      </ul>
    </div>
  );
}
