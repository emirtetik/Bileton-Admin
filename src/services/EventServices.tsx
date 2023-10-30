import { BaseService } from "./BaseService";
// import { event } from "../types";

export const EventService = {
  getAll: async () => await BaseService.get("events"),
  get: async (id: string) => await BaseService.get("events/" + id),

  
};