const BASE_API_URL = "http://localhost:8080/api/event/";

export const BaseService = {
  get: async (path: string) => {
    const response = await fetch(BASE_API_URL + path);
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    return await response.json();
  },
  post: async (path: string, formData: unknown) => {
    const response = await fetch(BASE_API_URL + path, {
      method: "POST",
      headers: {
        Accept: "multipart/form-data",
      },
      body: formData,
    });
    return await response.json();
  },
  delete: async (path: string) => {
    const response = await fetch(BASE_API_URL + path, {
      method: "DELETE",
    });
    return await response.json();
  },
};
