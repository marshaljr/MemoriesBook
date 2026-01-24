import { fetchPosts, createPosts } from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await createPosts(newPost);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
