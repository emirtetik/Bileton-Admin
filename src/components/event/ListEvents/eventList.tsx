import EventRow from "./eventRow";
import { useState } from "react";
import MuiButton from "../../mui/button";
import {TbPlayerTrackPrevFilled,TbPlayerTrackNextFilled,} from "react-icons/tb";

interface event {
    id: string;
    image: string;
    name: string;
    description: string;
    date: string;
    location: string | [number,number];
    status: string;
    category: string;
    unitsInStock:number
}

const EventList = (props: {
  events: event[];
  isLoading: boolean;
  error: unknown;
}) => {
  const [page, setPage] = useState(1);

  if (props.error) return <div>failed to load</div>;
  if (props.isLoading) return <div>loading...</div>;
  return (
    <div className="w-full max-w-6xl mx-auto rounded-md font-raleway ">
      <div>
        <div className="py-2 overflow-x-auto ">
          <div className="inline-block min-w-full overflow-hidden shadow-dark ">
            <table className="w-full leading-normal bg-third rounded-2xl table-fixed">
              <thead>
                <tr>
                  <th className="px-5 py-3 tracking-wider text-left border-b-4 text-fourth border-fifth  ">
                    Date
                  </th>
                  <th className="px-5 py-3 tracking-wider text-left border-b-4 text-fourth border-fifth  truncate">
                    Event
                  </th>
                  <th className="px-5 py-3 tracking-wider text-left border-b-4 text-fourth border-fifth">
                    Location
                  </th>
                  <th className="px-5 py-3 tracking-wider text-left border-b-4 text-fourth border-fifth">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.events
                  .slice(page - 1, page + 5)
                  .map((event: event, i: number) => (
                      <EventRow {...event}  key={i}  />
                  ))}
              </tbody>
            </table>
            <div className="flex flex-col items-center py-2 border-t-4 bg-third xs:flex-row xs:justify-between ">
              <span className="text-md text-fourth xs:text-sm">
                Showing {page} to{" "}
                {page + 5 > props.events.length
                  ? props.events.length
                  : page + 5}{" "}
                of {props.events.length}
              </span>
              <div className="inline-flex gap-3 mt-2 xs:mt-0">
                <MuiButton
                  size="small"
                  variant="outlined"
                  onClick={() => {
                    if (page - 5 > 0) {
                      setPage(page - 5);
                    }
                  }}
                >
                  <TbPlayerTrackPrevFilled  className="w-8 h-8 text-black"/>
                </MuiButton>
                <MuiButton
                  size="small"
                  variant="outlined"
                  onClick={() => {
                    if (page + 5 < props.events.length) {
                      setPage(page + 5);
                    }
                  }}
                >
                  <TbPlayerTrackNextFilled className="w-8 h-8 text-black"/>
                </MuiButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventList;