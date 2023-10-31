import MuiButton from "../mui/button";
import React, { useState } from "react";
import {useQuery} from 'react-query'
import axios from "axios";
import { CategoryService } from "../../services/CategoryService";
type Category = {
  id: string;
  name: string;
};
const fetcher = () => {return CategoryService.getAll()}
export default function Form() {
   const {data, isLoading,error} = useQuery('categories', fetcher)

  const [category, setCategory] = useState("");
  const [eventName, setEventName] = useState("");
  const [ticketSaleDates, setTicketSaleDates] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [city, setCity] = useState("");
  const [venue, setVenue] = useState("");
 if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const eventData = {
      category,
      eventName,
      ticketSaleDates,
      eventDate,
      city,
      venue,
    };
  
    console.log(eventData);
  
    try {
      const response = await axios.post('API_URL', eventData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex-col p-4 mx-auto bg-black border rounded-lg shadow-md lex md:flex-row">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-start justify-between mb-4 space-x-0 md:space-x-4 md:flex-row">
          <label>Etkinlik Kategorisini Seciniz:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-black border rounded-lg "
          >
            {data?.map((category:Category) => (
              <option key={category.id} value={category.id} className="text-black">
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col items-start justify-between mb-4 space-x-0 md:space-x-4 md:flex-row">
          <label>Etkinligin Adini Giriniz:</label>

          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="text-black border rounded-lg "

          />
        </div>
        <div className="flex flex-col items-start justify-between mb-4 space-x-0 md:space-x-4 md:flex-row">
          <label>Bilet Satis Tarihlerini Seciniz: </label>
          <input
            type="date"
            value={ticketSaleDates}
            onChange={(e) => setTicketSaleDates(e.target.value)}
            className="text-black border rounded-lg "
          />
        </div>
        <div className="flex flex-col items-start justify-between mb-4 space-x-0 md:space-x-4 md:flex-row">
          <label>Etkinligin Tarihini Giriniz:</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="text-black border rounded-lg "
          />
        </div>
        <div className="flex flex-col items-start justify-between mb-4 space-x-0 md:space-x-4 md:flex-row">
          <label>Etkinligin Yapilacagi Ili Seciniz:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="text-black border rounded-lg "

          />
        </div>
        <div className="flex flex-col items-start justify-between mb-4 space-x-0 md:space-x-4 md:flex-row">
          <label>Etkingilin Yapilacagi mekanı seçiniz:</label>
          <input
            type="text"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            className="text-black border rounded-lg "

          />
        </div>
        <div className="grid justify-items-stretch ">
          <MuiButton
            type="submit"
            size="small"
            variant="contained"
            sx={{
              borderRadius: "30px",
              width: "20%",
              justifySelf: "end",
              border: "1px solid white",
            }}
          >
            Ürün ekle
          </MuiButton>
        </div>
      </form>
    </div>
  );
}
