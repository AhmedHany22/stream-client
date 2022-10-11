import Axios from "axios";

export default Axios.create({
  baseURL: "https://streamly-json-server.herokuapp.com/",
});
