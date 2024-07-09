import "../css/main.css";
import "./mode";
import request from "./request";
import { createCountryAbout } from "./updateUI";

const urlSearch = window.location.search;
const urlParams = new URLSearchParams(urlSearch);
const countryName = urlParams.get("country");
const countryURL = `https://restcountries.com/v3.1/${countryName}`;

request(countryURL).then((country) => {
  createCountryAbout(country[0]);
});
