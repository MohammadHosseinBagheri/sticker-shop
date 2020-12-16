import axios from "axios";
const getAllStickers = async () => {
  const response = await axios.get(
    "/api/data"
  );
  const { data } = await response;
  return data;
};
export { getAllStickers };
