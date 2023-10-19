import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0ca71784f50940789604aa68239ffaf1",
  },
});
