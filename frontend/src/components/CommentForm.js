import { useState } from "react";

function CommentForm() {
  const [comment, setComment] = useState();

  const postComment = (event) => {
    if (comment) {
      event.preventDefault();
      alert(`Published comment: ${comment}`);
    }
    // Talk with backend
  };

  return (
    <form className="post__commentBox">
      <fieldset>
        <input
          className="post__input"
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </fieldset>
      <buttton
        className="post__button"
        disabled={!comment}
        type="submit"
        onClick={postComment}
      >
        Post
      </buttton>
    </form>
  );
}
