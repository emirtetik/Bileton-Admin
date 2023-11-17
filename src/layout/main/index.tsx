import { useState } from "react";
import { Outlet } from "react-router-dom"
import Sidebar from "../../components/sidebar/Sidebar"

const MainMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex w-full ">
            <Sidebar  isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div className="flex-1">
            <Outlet/>
            </div>
        </div>
      )
    }
    
export default MainMenu