import axios from "axios";

//we can build a axios.get() request here in a function and call that function in our app component or else
//we can do the following method

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID fOqMVikl2SMBqkNJo_h3iN2xQd7TkoX64lg-YyNO0BQ",
  },
});
