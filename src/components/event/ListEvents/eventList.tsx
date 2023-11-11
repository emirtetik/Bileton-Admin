import Moment from "react-moment";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { event } from "../../../types";
import { Link } from "react-router-dom";

function uint8ArrayToBase64(uint8Array) {
  let binary = "";
  uint8Array.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}
const columns: GridColDef[] = [
  {
    field: "date",
    headerName: "Date",
    width: 150,

    renderCell: (params) => (
      <h3 className="whitespace-no-wrap text-fourth">
        {/* <Moment format="MM">{params.row.eventDate}</Moment> */}
      </h3>
    ),
  },
  {
    field: "name",
    headerName: "Event",
    width: 400,
    renderCell: (params) => (
      <Link to={`/event/${params.row.name}-${params.row._id}`}>
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

          <h3 className="pl-3 whitespace-no-wrap text-fourth">
            {params.row.name}
          </h3>
        </div>
      </Link>
    ),
  },
  {
    field: "location",
    headerName: "Location",
    width: 200,
    renderCell: (params) => (
      <h3 className="whitespace-no-wrap text-fourth">{params.row.location}</h3>
    ),
  },
  {
    field: "category",
    headerName: "Category",
    width: 200,
    renderCell: (params) => (
      <h3 className="whitespace-no-wrap text-fourth">{params.row.category}</h3>
    ),
  },
];

const EventList = (props: {
  events: event[];
  isLoading: boolean;
  error: unknown;
}) => {
  if (props.error) return <div>failed to load</div>;
  if (props.isLoading) return <div>loading...</div>;
  console.log(props.events);
  const rows = props.events;
  if (props.events.length === 0)
    return <div className="text-center">No events found</div>;
  return (
    <div className="w-full">
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
    </div>
  );
};

export default EventList;
