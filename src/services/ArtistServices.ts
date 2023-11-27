import { BaseService } from "./BaseService";

export const ArtistService = {
  getAll: async () => {
    const result = await BaseService.get("artist");
    console.log(result);
    return result;
  },
  add: async (data: BodyInit |null |undefined) => await BaseService.post("artist", data),
};
