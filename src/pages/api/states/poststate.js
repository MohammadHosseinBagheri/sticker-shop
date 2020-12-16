import allStates from "../data/cities";
export default async (req, res) => {
  const { state } = await req.body;
  if (state) {
    const {cities} = await allStates.find((item) => item.name === state);
    res.json(cities)
  }
};
