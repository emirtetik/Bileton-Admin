// import Moment from 'react-moment';

import { EventService } from "../../../services/EventServices";
import MuiButton from "../../mui/button";

interface event {
    image: string;
    name: string;
    description: string;
    date: string;
    location: string | [number, number];
    status: string;
    id:string 
  }
  
  const EventRow = (props: event) => {

     const handleDelete = async ( ) => {
        try {
            await EventService.delete(props.id);
        } catch (error) {
            console.log("silme işlemi gerçekleşmedi",error);
            
        }
     }
     
    return (
      <tr className="w-full flex gap-1">
        <td className="px-5  border border-fifth  text-sm  bg-white flex sm:min-w-[140px] md:min-w-[240px] lg:min-w-[280px]">
          <div className="flex items-center justify-center ">
            <div className="flex-shrink-0 w-10 h-10">
              <img
                className="w-full h-full rounded-md"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                alt=""
              />
            </div>
            <div className="ml-3 ">
              <p className="text-fourth font-bold   whitespace-no-wrap">
                {props.name}
              </p>
            </div>
          </div>
        </td>
        <td className="px-5 border border-fifth bg-white text-sm flex sm:min-w-[140px] md:min-w-[240px] lg:min-w-[280px]">
          <div className="flex items-center justify-center">
            <p className="text-fourth whitespace-no-wrap">Admin</p>
          </div>
        </td>
        <td className="px-5  border border-fifth bg-white text-sm sm:min-w-[140px] md:min-w-[240px] lg:min-w-[280px]">
          {/* <p className="text-fourth whitespace-no-wrap"><Moment format="DD/MM/YYYY">{props.date}</Moment></p> */}
        </td>
        <td className="px-5 py-4 border border-fifth bg-third text-sm sm:min-w-[140px] md:min-w-[240px] lg:min-w-[280px]  hover:bg-fourth hover:text-primary hover:font-bold">
          <span className="relative inline-block px-3 py-1  text-white leading-tight">
            <span
              aria-hidden
              className="absolute inset-0  opacity-50 "
            ></span>
            <MuiButton variant="text" size="medium" onClick={handleDelete}>Delete</MuiButton>
          </span>
        </td>
      </tr>
    );
  };
  
  export default EventRow;