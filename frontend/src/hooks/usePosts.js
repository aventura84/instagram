import { useEffect, useState } from "react";
import { getAllPostsService, getUserPostsService } from "../index2.js";
const usePosts = (id) => {
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setloading(true);

        const data = id
          ? await getUserPostsService(id)
          : await getAllPostsService();

        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setloading(false);
      }
    };
    loadPosts();
  }, [id]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  return { posts, loading, error, addPost };
};
export default usePosts;
