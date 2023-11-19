import MuiButton from "../mui/button";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { CategoryService } from "../../services/CategoryService";
import { EventService } from "../../services/EventServices";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { styled } from "@mui/material/styles";

type Category = {
  id: string;
  name: string;
};
const cityFetch = () => {
  return EventService.getAll();
};
const fetcher = () => {
  return CategoryService.getAll();
};

const Alert = styled(MuiAlert)(({ theme }) => ({
  "& .MuiAlert-icon": {
    marginRight: theme.spacing(1),
  },
  "&.MuiAlert-standardError": {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  "&.MuiAlert-standardSuccess": {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  },
}));


export default function Form() {
  const [isErrorSnackbarOpen, setIsErrorSnackbarOpen] = React.useState(false);
  const [isSuccessSnackbarOpen, setIsSuccessSnackbarOpen] =
    React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");

  const {
    data: categoryData,
    isLoading: categoryIsLoading,
    error: categoryError,
  } = useQuery("categories", fetcher);
  const { isLoading: cityIsLoading, error: cityError } = useQuery(
    "city",
    cityFetch
  );
  const [category, setCategory] = useState("");
  const [eventName, setEventName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [city, setCity] = useState("");
  const [venue, setVenue] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

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
    if (!category || !eventName || !startTime || !endTime || !eventDate || !city || !venue || !description || !image) {
      setErrorMessage("Tüm alanların doldurulması gerekiyor.");
      setIsErrorSnackbarOpen(true);
      return;
    }
    const formData = new FormData();

    if (image !== null) {
      formData.append("image", image);
    }

    formData.append("category", category);
    formData.append("eventName", eventName);
    formData.append("startTime", startTime);
    formData.append("endTime", endTime);
    formData.append("eventDate", eventDate);
    formData.append("city", city);
    formData.append("venue", venue);
    formData.append("description", description);


    try {
      const response = await EventService.add(formData);
      console.log('Response:', response);
      setSuccessMessage("yeni bir etkinlik eklendi.");
      setIsSuccessSnackbarOpen(true);
      setCategory("");
      setEventName("");
      setStartTime("");
      setEndTime("");
      setEventDate("");
      setCity("");
      setVenue("");
      setDescription("");
      setImage(null);
    } catch (error) {
      setErrorMessage("Ekleme işlemi gerçekleşmedi.");
      setIsErrorSnackbarOpen(true);
    }
  };
 const setSelectedFile = (event: React.ChangeEvent<HTMLInputElement>) => {
  const selectedFile = event.target.files ? event.target.files[0] : null;
  setImage(selectedFile);
};

  return (
    <div
      className="flex flex-col w-full max-w-screen-lg mx-auto p-4 bg-gray-400 border rounded-md text-fourth shadow-dark"
    >
      <h1 className="py-3 m-6 text-xl font-extrabold text-center text-white rounded-md bg-fourth">
        Yeni Bir Etkinlik Ekle
      </h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-4">
        <div className="flex flex-col ">
          <label className="font-bold ">Etkinlik Kategorisi:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-black border-2 border-yellow-300 rounded-md "
          >
            {categoryData?.map((category: Category) => (
              <option key={category.id} value={category.id} className="">
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col ">
          <label className="font-bold ">Etkinligin Adi:</label>

          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="text-black border-2 border-yellow-300 rounded-md "
          />
        </div>
       
        <div className="flex flex-col ">
          <label className="font-bold ">Etkinlik Başlangıç Saati: </label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="text-black border-2 border-yellow-300 rounded-md "
          />
        </div>
        <div className="flex flex-col ">
          <label className="font-bold ">Etkinlik Bitiş Saati: </label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="text-black border-2 border-yellow-300 rounded-md "
          />
        </div>
        <div className="flex flex-col ">
          <label className="font-bold ">Etkinligin Tarihi:</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="text-black border rounded-md "
          />
        </div>
        <div className="flex flex-col ">
          <label className="font-bold "> Sehir seçiniz:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="text-black border-2 border-yellow-300 rounded-md "
          />
        </div>
        <div className="flex flex-col ">
          <label className="font-bold "> Mekanı seçiniz:</label>
          <input
            type="text"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            className="text-black border-2 border-yellow-300 rounded-md "
          />
        </div>
        <div className="flex flex-col ">
          <label className="font-bold ">Etkinlik için resim seçin:</label>
          <input type="file" name="image" onChange={setSelectedFile} />
        </div>
        <div className="grid items-start mb-4 space-x-0 md:space-x-4 md:flex-row">
          <label className="font-bold "> Etkinlik açıklama:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full text-black border-2 border-yellow-300 rounded-md "
          />
        </div>
        <div className="col-span-2 flex justify-center">
          <MuiButton
            type="submit"
            size="small"
            variant="contained"
            className="rounded-full border border-white"
          >
            Ürün ekle
          </MuiButton>
        </div>
      </form>
      <Snackbar
        open={isErrorSnackbarOpen}
        autoHideDuration={5000}
        onClose={() => setIsErrorSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert variant="filled" severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
      <Snackbar
        open={isSuccessSnackbarOpen}
        autoHideDuration={5000}
        onClose={() => setIsSuccessSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert variant="filled" severity="success">
          {successMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
