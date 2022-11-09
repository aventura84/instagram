import { useEffect, useState } from "react";
import { getUserPostsService } from "../services.js";

const useUserPosts = (userId) => {
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setloading(true);

        const data = await getUserPostsService(userId);

        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setloading(false);
      }
    };
    loadPosts();
  }, [userId]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  return { posts, loading, error, addPost };
};
export default useUserPosts;
