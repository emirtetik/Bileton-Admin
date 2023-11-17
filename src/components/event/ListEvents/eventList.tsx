import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { event } from "../../../types";
import MuiButton from "../../mui/button";
import { useState } from "react";
import { EventService } from "../../../services/EventServices";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useMutation,useQueryClient } from 'react-query';
import { styled } from '@mui/material/styles';


const Alert = styled(MuiAlert)(({ theme }) => ({
  "& .MuiAlert-icon": {
    marginRight: theme.spacing(1),
  },
  "&.MuiAlert-standardError": {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
}));

function uint8ArrayToBase64(uint8Array:any) {
  let binary = "";
  uint8Array.forEach((byte:any) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

const EventList = (props: {
  events: event[];
  isLoading: boolean;
  error: unknown;
}) => {
  const [isErrorSnackbarOpen, setIsErrorSnackbarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const queryClient = useQueryClient();
  const mutation = useMutation(EventService.delete, {
    onSuccess: () => {
      queryClient.invalidateQueries("events");
    },
  });

  const handleDelete = async (_id: string) => {
    try {
      await mutation.mutateAsync(_id);
    } catch (error) {
      setErrorMessage("Silme işlemi gerçekleşmedi.");
      setIsErrorSnackbarOpen(true);
    }
  };
  
const columns: GridColDef[] = [
  
  {
    field: "date",
    headerName: "Date",
    width: 150,


      renderCell: (params) => (
        <h3 className="whitespace-no-wrap text-fourth">
              {new Date(params.row.eventDate ).toLocaleDateString()} 
       </h3>
      ),

  },
  {
    field: "name",
    headerName: "Event",
    width: 400,
    renderCell: (params) => (
     
        <div className="flex items-center justify-center">
          <div className="flex-shrink-0 w-12 h-12 ">
            {params.row.image.data ? (
              <img
                className="object-contain w-full h-full "
                src={`data:${
                  params.row.image.contentType
                };base64,${uint8ArrayToBase64(params.row.image.data.data)}`}
                alt={params.row.name}
              />
            ) : (
              <img src="https://via.placeholder.com/150" alt="placeholder" />
            )}
          </div>

          <h3 className="pl-3 whitespace-no-wrap text-black">
            {params.row.name}
          </h3>
        </div>
    ),
  },
  {
    field: "location",
    headerName: "Location",
    width: 200,
    renderCell: (params) => (
      <h3 className="whitespace-no-wrap text-black">{params.row.city}</h3>
    ),
  },
  {
    field: "category",
    headerName: "Category",
    width: 200,
    renderCell: (params) => (
      <h3 className="whitespace-no-wrap text-black">{params.row.category}</h3>
    ),
  },
  {
    field: 'delete',
    headerName: 'Delete',
    width: 150,
    renderCell: (params) => (
      <MuiButton onClick={() => handleDelete(params.row._id)} variant={"text"} size={"small"}>Delete</MuiButton>
    ),
  },
];

  if (props.error) return <div>failed to load</div>;
  if (props.isLoading) return <div>loading...</div>;
  console.log(props.events);
  const rows = props.events;
  if (props.events.length === 0)
    return <div className="text-center">No events found</div>;
  return (
    <div className="w-full bg-red-900 " style={{zIndex:"-10"}}>
         
      <DataGrid
        rows={rows}
        getRowId={(row) => row._id.toString()}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
      <Snackbar
   open={isErrorSnackbarOpen}
   autoHideDuration={5000}
   onClose={() => setIsErrorSnackbarOpen(false)}
   anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
 >
   <Alert variant="filled" severity="error">
     {errorMessage}
   </Alert>
 </Snackbar>
    </div>
  );
};

export default EventList;


