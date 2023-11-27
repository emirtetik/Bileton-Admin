import { BaseService } from "./BaseService";

export const VenueService = {
  getAll: async () => {
    const result = await BaseService.get("venue");
    console.log(result);
    return result;
  },
  add: async (data: BodyInit |null |undefined) => await BaseService.post("venue", data),
};
