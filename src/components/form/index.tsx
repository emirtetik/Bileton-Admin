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
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
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
    if (!category || !eventName || !startDate || !endDate || !eventDate || !city || !venue || !description || !image) {
      setErrorMessage("Tüm alanların doldurulması gerekiyor.");
      setIsErrorSnackbarOpen(true);
      return;
    }
    const formData = new FormData();

    // Explicitly set the 'image' field as a File object
    if (image !== null) {
      formData.append("image", image);
    }

    formData.append("category", category);
    formData.append("eventName", eventName);
    formData.append("startDate", startDate);
    formData.append("endDate", endDate);
    formData.append("eventDate", eventDate);
    formData.append("city", city);
    formData.append("venue", venue);
    formData.append("description", description);


    try {
      const response = await EventService.add(formData);
      console.log('Response:', response);
      setSuccessMessage("yeni bir etkinlik eklendi.");
      setIsSuccessSnackbarOpen(true);
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
      className="flex-col w-10/12 h-auto p-2 mx-auto bg-gray-400 border rounded-md text-fourth shadow-dark lex md:flex-row"
    >
      <h1 className="py-3 m-6 text-xl font-extrabold text-center text-white rounded-md bg-fourth">
        Yeni Bir Etkinlik Ekle
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-start justify-between mb-4 space-x-0 md:space-x-4 md:flex-row">
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
        <div className="flex flex-col items-start justify-between mb-4 space-x-0 md:space-x-4 md:flex-row">
          <label className="font-bold ">Etkinligin Adi:</label>

          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="text-black border-2 border-yellow-300 rounded-md "
          />
        </div>
       
        <div className="flex flex-col items-start justify-between mb-4 space-x-0 md:space-x-4 md:flex-row">
          <label className="font-bold ">Bilet Satış Başlangıç Tarihi: </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="text-black border-2 border-yellow-300 rounded-md "
          />
        </div>
        <div className="flex flex-col items-start justify-between mb-4 space-x-0 md:space-x-4 md:flex-row">
          <label className="font-bold ">Bilet Satış Bitiş Tarihi: </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="text-black border-2 border-yellow-300 rounded-md "
          />
        </div>
        <div className="flex flex-col items-start justify-between mb-4 space-x-0 md:space-x-4 md:flex-row">
          <label className="font-bold ">Etkinligin Tarihi:</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="text-black border rounded-md "
          />
        </div>
        <div className="flex flex-col items-start justify-between mb-4 space-x-0 md:space-x-4 md:flex-row">
          <label className="font-bold "> Sehir seçiniz:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="text-black border-2 border-yellow-300 rounded-md "
          />
        </div>
        <div className="flex flex-col items-start justify-between mb-4 space-x-0 md:space-x-4 md:flex-row">
          <label className="font-bold "> Mekanı seçiniz:</label>
          <input
            type="text"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            className="text-black border-2 border-yellow-300 rounded-md "
          />
        </div>
        <div className="flex flex-col items-start justify-between mb-4 space-x-0 md:space-x-4 md:flex-row">
          <label className="font-bold ">Etkinlik için resim seçin:</label>
          <input type="file" name="image" onChange={setSelectedFile} />
        </div>
        <div className="grid items-start mb-4 space-x-0 md:space-x-4 md:flex-row">
          <label className="font-bold "> Etkinlik açıklama:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-2/3 text-black border-2 border-yellow-300 rounded-md h-3/3 "
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
              justifySelf: "center",
              border: "1px solid white",
            }}
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
