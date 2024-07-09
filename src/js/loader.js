const loader = document.querySelector(".loader");

const showLoader = (showed) => {
  if (showed) {
    loader.classList.remove("hidden");
  } else {
    loader.classList.add("hidden");
  }
};

export default showLoader;
