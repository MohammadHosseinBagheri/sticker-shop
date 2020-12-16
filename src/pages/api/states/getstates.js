import cities from "../data/cities";
export default (req, res) => {
  res.json({ status: 200, data: cities });
};
