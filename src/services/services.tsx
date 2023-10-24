import axios from "axios";

const getChartsData = async (areaChartsDataUrl: string) => {
  try {
    const result = await axios.get(areaChartsDataUrl);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default getChartsData;
