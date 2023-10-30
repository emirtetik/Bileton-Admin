import List from "../list/List";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
interface SideBarProps {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, setIsOpen }) => {
  const pagesList = {
    addTicket: "addTicket",
    statisticalData: "statisticalData",
  };

  return (
    <div
      className={`flex flex-col sticky top-0  transition-all duration-500 ease-in-out  h-screen bg-gradient-to-l from-orange-500 to-gray-500 ${
        isOpen ? "w-60" : "w-16"
      }`}
    >
      <div className="flex items-center justify-center mt-10">
        <div className="flex items-center mb-16">
        {isOpen ? (
            <>
              <a href="/">
                <img
                  src="../../src/images/admin.png"
                  alt="Admin Photo"
                  className="w-16 rounded-full"
                />
              </a>
              <a href="/">
                <h2 className="ml-2 text-white">Admin Ad - Soyad</h2>
              </a>
            </>
          ) : (
            <div className="flex">
              <GrUserAdmin className="ml-2 w-7 h-7"/>
            </div>
          )}
        </div>
          <div className="relative ">
            <div className="absolute top-5 left-1">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <BsArrowLeftCircle className=" w-7 h-7" />
                ) : (
                  <BsArrowRightCircle className="w-7 h-7" />
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
