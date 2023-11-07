import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { event } from "../../../types";

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
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="object-cover w-full h-full rounded-md"
              src={params.row.image}
              alt=""
            />
          </div>

          <h3 className="pl-3 whitespace-no-wrap text-fourth">
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
      <h3 className="whitespace-no-wrap text-fourth">{params.row.city}</h3>
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
  const rows = props.events;

  if (props.error) return <div>failed to load</div>;
  if (props.isLoading) return <div>loading...</div>;
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
