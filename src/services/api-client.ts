import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f3d8220f0d154365a53785339200c456",
  },
});
