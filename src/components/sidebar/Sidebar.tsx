import List from "./list/menu";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import { useAccount } from "../../store/auth/hooks";
interface SideBarProps {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, setIsOpen }) => {
  const pagesList = {
    addTicket: "addTicket",
    home: "/home",
    addEvent:"/addEvent"
  };

  const account = useAccount()

  return (
    <div
      className={`flex flex-col sticky top-0  transition-all duration-500 ease-in-out  h-screen bg-black ${
        isOpen ? "w-60" : "w-16"
      }`}
    >
      <div className="flex items-center justify-center mt-10">
        <div className="flex items-center mb-16">
          {isOpen ? (
            <div className="mt-10 text-2xl text-white">
              <h2>{account.fullname}</h2>
            </div>
          ) : (
            <div className="flex">
              <GrUserAdmin className="ml-2 w-7 h-7" />
            </div>
          )}
        </div>
        <div className="">
          <div className="absolute text-white top-5 left-1">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <BsArrowLeftCircle className="ml-2 w-7 h-7" />
              ) : (
                <BsArrowRightCircle className="ml-2 w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      <List pagesList={pagesList} isOpen={isOpen} />
    </div>
  );
};
export default SideBar;
