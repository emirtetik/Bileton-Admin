import { BaseService } from "./BaseService";

export const EventService = {
  getAll: async () => await BaseService.get("events"),
  get: async (id: string) => await BaseService.get("events/" + id),
  add: async (data: unknown) => await BaseService.post("event", data),
  delete: async (id: string) => await BaseService.delete("event/" + id),
};
