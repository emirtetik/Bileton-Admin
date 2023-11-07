import EventList from "./eventList";
import { useQuery } from "react-query";
import { EventService } from "../../../services/EventServices";

const fetcher = () => EventService.getAll();

const ListEvent = () => {
  const { data: events, isLoading, error } = useQuery("events", fetcher);

  return (
    <div>
      <EventList
        events={events}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default ListEvent;