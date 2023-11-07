import { BaseService } from "./BaseService";

export const EventService = {
  getAll: async () => {
    const result = await BaseService.get("events");
    console.log(result);
    return result;
  },
  get: async (id: string) => await BaseService.get("events/" + id),
  add: async (data: unknown) => await BaseService.post("event", data),
  delete: async (id: string) => await BaseService.delete("event/" + id),
};
