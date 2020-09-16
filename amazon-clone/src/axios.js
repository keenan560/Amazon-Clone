import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/challenge-7803c/us-central1/api",
  //  Thr API (cloud function) URL
});

export default instance;