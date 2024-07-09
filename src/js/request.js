import showLoader from "./loader";

const request = async (api) => {
  showLoader(true);
  const req = await fetch(api);
  if (!req.ok) {
    throw new Error("You have something error :(");
  }
  const data = await req.json();
  showLoader(false);
  return data;
};

export default request;
