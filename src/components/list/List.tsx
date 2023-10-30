import { Link } from "react-router-dom";
import {BiCommentAdd} from 'react-icons/bi'
import {FcStatistics} from 'react-icons/fc'
import AddModal from "../../modals/addModal";
import { useState } from "react";
type PagesListType = {
  addTicket: string;
  statisticalData: string;
};

interface ListProps {
  pagesList: PagesListType;
  isOpen: boolean;
}

export default function List({ pagesList,isOpen }: ListProps) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex items-center justify-center">
      
      <ul className="text-xl font-semibold text-white list-none">
        {isOpen ? (
<>
        <li className="py-2">
        <button onClick={() => setShowModal(true)}>Modal Aç</button>
              {showModal && <AddModal closeModal={() => setShowModal(false)} />}
        </li>
        <li className="py-2">
          <Link to={pagesList.statisticalData}>İstatistik Veriler</Link>
        </li>
        </>
        ) : (
        <div>
          <div>
            <BiCommentAdd className="w-7 h-7"/>
            <FcStatistics className="w-7 h-7"/>
          </div>
        </div>
        )}

      </ul>
    </div>
  );
}
