import "../css/main.css";
import "./filter";
import "./mode";
import request from "./request";
import { createCountry } from "./updateUI";

const api = "https://restcountries.com/v3.1/all";
request(api)
  .then((countries) => {
    createCountry(countries);
  })
  .catch((err) => console.log(err));
