// Check .env to copy the API_KEY
const API_KEY = "";
const API_URL = "https://api.nasa.gov/planetary/apod";

export default async (urlParams?: String) => {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}${typeof urlParams !== "undefined" && (urlParams?.length > 0) ? urlParams : ""
      }`
    );
    const data = await response.json();

    return Promise.resolve(data);

  } catch (error) {
    return Promise.reject(error);
  }
};