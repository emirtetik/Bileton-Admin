import { Link } from "react-router-dom";
import { BiCommentAdd } from "react-icons/bi";
import { FcStatistics } from "react-icons/fc";
import AddModal from "../../../modals/addModal";
import { useState } from "react";
type PagesListType = {
  addTicket: string;
  statisticalData: string;
  home: string;
};

interface ListProps {
  pagesList: PagesListType;
  isOpen: boolean;
}

export default function Menu({ pagesList, isOpen }: ListProps) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full flex items-center justify-center">
      <ul className="w-full bg-transparent  font-bold font-raleway text-white ">
        {isOpen ? (
          <>
            <li className="my-2 pl-4 hover:bg-blue-800 ">
              <Link to={pagesList.home}>Anasayfa</Link>
            </li>
            <li className="my-2 pl-4 hover:bg-blue-800">
              <button onClick={() => setShowModal(true)}>Etkinlik Ekle</button>
              {showModal && <AddModal closeModal={() => setShowModal(false)} />}
            </li>
           
          </>
        ) : (
          <div>
            <div className="flex flex-col gap-5 items-center justify-center">
              <BiCommentAdd className="w-7 h-7" />
              <FcStatistics className="w-7 h-7" />
            </div>
          </div>
        )}
      </ul>
    </div>
  );
}
