import axios from "axios";

// const url = "http://localhost:5000";

// export const fetchPosts = () => axios.get(url);

const API = axios.create({
  baseURL: "http://localhost:5001",
});

export const fetchPosts = () => API.get("/posts");
export const createPosts = (newPost) => API.post("/posts", newPost);
