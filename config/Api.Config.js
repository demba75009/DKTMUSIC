import * as axios from "axios";

const Service = axios.create({
  baseURL: "https://dktmusic-afef7.firebaseio.com/",
});

export default Service;
