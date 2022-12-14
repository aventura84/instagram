import { Link, useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import { deletePostService } from "../services";
import { AuthContext } from "../context/AuthContext.js";

export function Post({ post, removePost }) {
  const navigate = useNavigate();
  const { user, token } = useContext(AuthContext);
  const [error, setError] = useState("");

  const deletePost = async (id) => {
    try {
      await deletePostService({ id, token });

      if (removePost) {
        removePost(id);
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <article>
      <p>{post.text}</p>
      {post.image ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/uploads/${post.image}`}
          alt={post.image}
        />
      ) : null}
      <p>
        By<Link to={"/user/${post.user.id"}></Link>
        {post.email}on {""}
        By{post.email} on {""}
        <Link to={`/post/${post.id}`}>
          {new Date(post.created_at).toLocaleString()}
        </Link>
      </p>
      {user && user.id === post.user_id ? (
        <section>
          <button
            onClick={() => {
              if (window.confirm("Are you sure")) deletePost(post.id);
            }}
          >
            Delete post
          </button>
          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
    </article>
  );
}
