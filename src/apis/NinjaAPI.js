import axios from "axios";
import chalk from "chalk";

// https://rapidapi.com/apininjas/api/facts-by-api-ninjas/
const options = {
  url: "https://facts-by-api-ninjas.p.rapidapi.com/v1/facts",
  headers: {
    "X-RapidAPI-Host": "facts-by-api-ninjas.p.rapidapi.com",
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
  },
};
const color = chalk
const NinjaAPI = () => {
  axios
    .get(options.url, options.headers)
    .then((response) => {
      console.log(color.green(response));
      return response.data;
    })
    .catch((error) => {
      console.error(color.red("Error", error));
      return null;
    });
};

export default NinjaAPI;
