import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "80e5861d1468496bbcb92c549a967584",
  },
});
