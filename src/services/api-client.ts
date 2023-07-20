import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1c1c0092096b45c8a3fabf41af5e16b9",
  },
});
