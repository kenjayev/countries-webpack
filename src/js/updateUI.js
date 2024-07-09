const capitalCards = document.querySelector("ul.cards");
function formatNumber(num, separator) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

export const createCountry = (countries) => {
  capitalCards.innerHTML = "";
  countries.forEach((country) => {
    const countryName = country.name.common;
    const population = country.population;
    const region = country.region;
    const capital = country.capital ? country.capital[0] : "No Capital";
    const flag = country.flags.svg;

    const li = document.createElement("li");
    li.classList.add("cards__item");
    li.innerHTML = `
    <a href="./about.html?country=name/${countryName}">
    <img
      src="${flag}"
      alt="germany-flag"
      width="267"
      height="160"
    />
    <div class="cards__item-inner">
      <h3 class="cards__title">${countryName}</h3>
      <p class="population">Population: <span>${formatNumber(
        population,
        ","
      )}</span></p>
      <p class="region">Region: <span>${region}</span></p>
      <p class="capital">Capital: <span>${capital}</span></p>
    </div>
    </a>
    `;
    capitalCards.appendChild(li);
  });
};

export const createCountryAbout = (country) => {
  const {
    name,
    population,
    region,
    capital,
    borders,
    flags,
    tld,
    currencies,
    languages,
    subregion,
  } = country;
  const nativeName = Object.values(name.nativeName)[0].official;
  const currency = Object.values(currencies)[0].name;
  const language = Object.values(languages);

  const countryInfo = document.querySelector(".country-info");
  countryInfo.innerHTML = `
  <img
  class="country-info__img"
  src=${flags.svg}
  alt="${name.common}-flag"
  width="560"
  height="400"
/>
<div class="country-info__content">
  <h2>${name.common}</h2>
  <ul class="country-info__list">
    <li class="country-info__item">
      <p class="name">
        Native Name:
        <span>${nativeName}</span>
      </p>
      <p class="population">
        Population:
        <span>${formatNumber(population, ",")}</span>
      </p>
      <p class="region">
        Region:
        <span>${region}</span>
      </p>
      <p class="sub-region">
        Sub Region:
        <span>${subregion}</span>
      </p>
      <p class="capital">
        Capital:
        <span>${capital[0] ? capital[0] : "No Capital"}</span>
      </p>
    </li>
    <li class="country-info__item">
      <p class="name">
        Top Level Domain:
        <span>${tld[0]}</span>
      </p>
      <p class="population">
        Currencies:
        <span>${currency}</span>
      </p>
      <p class="region">
        Languages:
        <span>${language.join(", ")}</span>
      </p>
    </li>
  </ul>

  <div class="country-info__borders">
    <h3>Border Countries:</h3>
    ${
      borders
        ? borders
            .map((border) => {
              return `<a href="./about.html?country=alpha/${border}">${border}</a>`;
            })
            .join("")
        : "No Borders"
    }
  </div>
</div>
  `;
};
