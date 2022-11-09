import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { postComments } from "../data/comments.js";
import CommentForm from "./CommentForm.js";
import Comments from "./CommentForm.js";
import { deletePostService } from "../services";
import { AuthContext } from "../context/AuthContext.js";

function Post({ post, removePost }) {
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
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
    <article className="post">
      <p>{post.text}</p>
      {post.image ? (
        <img
          src={"${process.env.REACT_APP_BACKEND}/uploads/${post.image}"}
          alt={post.image}
        />
      ) : null}
      <p>
        By<Link to={"/user/${post.useid"}>{post.email}</Link>on ("")
        <Link to={"/post/${post.id}"}>
          {new Date(post.created_at).toLocaleString()}
        </Link>
      </p>
      {user && user.id === post.user_id ? (
        <section>
          <button>
            onClick=
            {() => {
              if (window.confirm("Are you sure")) deletePost(post.id);
            }}
            Delete post
          </button>
          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
    </article>
  );
}
