

export interface event {
    _id: string;
    image: string;
    name: string;
    description: string;
    date: string;
    location: string | [number,number];
    status: string;
    category: string;
}