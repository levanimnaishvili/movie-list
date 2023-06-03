import axios from "axios";

export async function fetchFood() {
  const options = {
    method: "GET",
    url: "https://the-mexican-food-db.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_SECRET,
      "X-RapidAPI-Host": "the-mexican-food-db.p.rapidapi.com",
    },
  };
  const response = await axios.request(options);
  return response.data;
}
