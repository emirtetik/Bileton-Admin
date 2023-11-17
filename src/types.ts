

export interface event {
    _id: string;
    image: string;
    name: string;
    startDate: string;
    eventDate: string;
    description: string;
    endDate: string;
    venue: string;
    city: string;
    location: string | [number,number];
    status: boolean;
    category: string;
}

export type Account = {
    id: number;
    username: string;
    fullname: string;
    avatar: string;
  };