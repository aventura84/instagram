import { useEffect, useState } from "react";
import { getSinglePostService } from "../services";

export const usePost = (postId) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const removePost = (id) => {
    // TODO implement
  };

  const addPost = () => {
    // TODO implement
  };

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);

        const data = await getSinglePostService(postId);

        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [postId]);

  return { post, loading, error, addPost, removePost };
};
