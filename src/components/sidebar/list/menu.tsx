import { Link } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import {IoHomeOutline  } from "react-icons/io5";
type PagesListType = {
  addTicket: string;
  home: string;
  addEvent:string;
};

interface ListProps {
  pagesList: PagesListType;
  isOpen: boolean;
}

export default function Menu({ pagesList, isOpen }: ListProps) {
  return (
    <div className="flex items-center justify-center w-full">
      <ul className="w-full p-3 font-bold text-white bg-transparent font-raleway">
        {isOpen ? (
          <>
            <li className="p-2 transition-colors rounded-lg hover:bg-yellow-900">
              <Link to={pagesList.home}>Ana Sayfa</Link>
            </li>
            <li className="p-2 transition-colors rounded-lg hover:bg-yellow-900">
              <Link to={pagesList.addEvent}>Etkinlik Ekle</Link>
            </li>
           
          </>
        ) : (
          <div>
            <div className="flex flex-col items-center justify-center gap-5">
              <IoHomeOutline className="w-7 h-7" />
              <IoIosAddCircleOutline  className="w-7 h-7"/>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
}
