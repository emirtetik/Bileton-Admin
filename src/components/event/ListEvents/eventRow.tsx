import  { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useMutation,useQueryClient } from 'react-query';
import { styled } from '@mui/material/styles';
import Moment from 'react-moment';
import { EventService } from "../../../services/EventServices";
import MuiButton from "../../mui/button";
import { event } from "../../../types";

const Alert = styled(MuiAlert)(({ theme }) => ({
  '& .MuiAlert-icon': {
    marginRight: theme.spacing(1),
  },
  '&.MuiAlert-standardError': {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
}));

const EventRow = (props: event) => {

  const [isErrorSnackbarOpen, setIsErrorSnackbarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const queryClient = useQueryClient();
  const mutation = useMutation(EventService.delete, {
    onSuccess: () => {
      queryClient.invalidateQueries('events');
    },
  });

  const handleDelete = async () => {
    try {
      await mutation.mutateAsync(props._id);
    } catch (error) {
      setErrorMessage('Silme işlemi gerçekleşmedi.');
      setIsErrorSnackbarOpen(true);
    }
  };
 

  return (
    <>
    <tr>
    <td className="flex px-5 text-sm bg-white ">
      <div className="flex items-center justify-center ">
        <p className="whitespace-no-wrap text-fourth">
        <Moment format="YYYY/MM/DD">{props.eventDate}</Moment>
        </p>
      </div>
    </td>
    <td className="flex px-5 text-sm bg-white ">
      <div className="flex items-center justify-center">
        <div className="flex-shrink-0 w-10 h-10">
          <img
            className="w-full h-full rounded-md"
            src={props.image}
            alt=""
          />
        </div>

        <p className="pl-3 font-bold whitespace-no-wrap text-fourth">
          {props.name}
        </p>
      </div>
    </td>
    <td className="flex items-center px-5 text-sm bg-white">
      <p className="whitespace-no-wrap text-fourth">{props.location}</p>
    </td>
    <td className="px-5 py-4 text-sm bg-white">
      <p className="whitespace-no-wrap text-fourth">{props.category}</p>
    </td>
    <td>
    <span className="relative inline-block px-3 py-1 leading-tight text-white">
          <MuiButton variant="text" size="medium" onClick={handleDelete}>
            Delete
          </MuiButton>
        </span>
    </td>
  </tr>
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
 </>
  );
};
export default EventRow;