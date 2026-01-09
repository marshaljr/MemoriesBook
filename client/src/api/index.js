import axios from "axios";

// const url = "http://localhost:5000/posts";

// export const fetchPosts = () => axios.get(url);

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const fetchPosts = () => API.get("/posts");
