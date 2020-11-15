import axios from "axios";
const getAllStickers = async () => {
  const response = await axios.get(
    "https://www.redbubble.com/typeahead/?term=cool&locale=en"
  );
  const { data } = await response;
  return data;
};
export { getAllStickers };
