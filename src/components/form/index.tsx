import MuiButton from "../mui/button";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { CategoryService } from "../../services/CategoryService";
import { EventService } from "../../services/EventServices";

type Category = {
  id: string;
  name: string;
};
type CityProps = {
  id: string;
  name: string;
};
const cityFetch = () => {
  return EventService.getAll();
};
const fetcher = () => {
  return CategoryService.getAll();
};

export default function Form() {
  const {
    data: categoryData,
    isLoading: categoryIsLoading,
    error: categoryError,
  } = useQuery("categories", fetcher);
  const {
    data: cityData,
    isLoading: cityIsLoading,
    error: cityError,
  } = useQuery("city", cityFetch);
  const [category, setCategory] = useState("");
  const [eventName, setEventName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [city, setCity] = useState("");
  const [venue, setVenue] = useState("");
  const [description, setDescription] = useState("");

  if (categoryIsLoading) {
    return <div>Loading...</div>;
  }
  if (categoryError) {
    return <div>Error</div>;
  }
  if (cityIsLoading) {
    return <div>Loading...</div>;
  }
  if (cityError) {
    return <div>Error</div>;
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const eventData = {
      category,
      eventName,
      startDate,
      endDate,
      eventDate,
      city,
      venue,
      description,
    };

    console.log(eventData);
    try {
      const response = await EventService.add(eventData);
      console.log("başarılı", response);
    } catch (error) {
      console.log("hata", error);
    }
  };
  return (
    <div className="flex-col p-4 mx-auto text-fourth bg-fifth border rounded-lg shadow-md lex md:flex-row min-w-[600px]">
      <h1 className="py-3 m-6 text-xl font-extrabold text-center text-white  bg-fourth rounded-lg">
        Yeni Bir Etkinlik Ekle
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-start justify-between mb-4 space-x-0 md:space-x-4 md:flex-row">
          <label>Etkinlik Kategorisi:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-black border-2 border-secondary rounded-lg "
          >
            {categoryData?.map((category: Category) => (
              <option key={category.id} value={category.id} className="">
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col items-start justify-between mb-4 space-x-0 md:space-x-4 md:flex-row">
          <label>Etkinligin Adi:</label>

          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="text-black border-2 border-secondary rounded-lg  "
          />
        </div>
        <div className="flex flex-col items-start justify-between mb-4 space-x-0 md:space-x-4 md:flex-row">
          <label>Bilet Satış Başlangıç Tarihi: </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="text-black border-2 border-secondary rounded-lg "
          />
        </div>
        <div className="flex flex-col items-start justify-between mb-4 space-x-0 md:space-x-4 md:flex-row">
          <label>Bilet Satış Bitiş Tarihi: </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="text-black border-2 border-secondary rounded-lg "
          />
        </div>
        <div className="flex flex-col items-start justify-between mb-4 space-x-0 md:space-x-4 md:flex-row">
          <label>Etkinligin Tarihi:</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="text-black border rounded-lg "
          />
        </div>
        <div className="flex flex-col items-start justify-between mb-4 space-x-0 md:space-x-4 md:flex-row">
          <label> Sehir seçiniz:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="text-black border-2 border-secondary rounded-lg "
          />
        </div>
        <div className="flex flex-col items-start justify-between mb-4 space-x-0 md:space-x-4 md:flex-row">
          <label> Mekanı seçiniz:</label>
          <input
            type="text"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            className="text-black border-2 border-secondary rounded-lg "
          />
        </div>
        <div className="grid items-start  mb-4 space-x-0 md:space-x-4 md:flex-row">
          <label> Etkinlik açıklama:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="text-black border-2 border-secondary rounded-lg h-[150px] "
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
