const searchForm = document.querySelector(".search");

searchForm.search.addEventListener("input", () => {
  const searchedText = searchForm.search.value.toLowerCase();
  const countriesCards = document.querySelectorAll(".cards .cards__item");
  const countriesTitle = document.querySelectorAll(".cards .cards__title");
  countriesTitle.forEach((title, i) => {
    if (title.textContent.toLowerCase().includes(searchedText)) {
      countriesCards[i].style.display = "block";
    } else {
      countriesCards[i].style.display = "none";
    }
  });
});

const searchByRegion = document.querySelectorAll(".search__select-list li");
const searchName = document.querySelector(".search__select span");
import { createCountry } from "./updateUI";
import request from "./request";

searchByRegion.forEach((region) => {
  region.addEventListener("click", () => {
    const regionName = region.textContent;
    searchName.textContent = regionName;
    let filterAPI;
    if (regionName === "All") {
      filterAPI = "https://restcountries.com/v3.1/all";
    } else {
      filterAPI = `https://restcountries.com/v3.1/region/${regionName}`;
    }
    console.log("sa");
    request(filterAPI)
      .then((countries) => createCountry(countries))
      .catch((err) => alert(err.message));
  });
});
// function searchedByRegion() {
//   e.target
// }
