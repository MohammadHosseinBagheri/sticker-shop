import axios from "axios";
const getAllStickers = async () => {
  const response = await axios.get(
    "http://localhost:3000/api/data"
  );
  const { data } = await response;
  return data;
};
export { getAllStickers };
