import usePosts from "../hooks/usePosts";
import Postlist from "../components/PostList";
import { ErrorMessage } from "../components/ErrorMessage";
import { Auth } from "../components/Auth";
import NewPost from "../components/NewPost.js";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";

function HomeScreen() {
  const { posts, loading, error, addPost, removePost } = usePosts();
  const { user, logout } = useContext(AuthContext);

  if (loading) return <p>loading posts</p>;
  if (error) return <ErrorMessage message={error} />;
  return (
    <div>
      <Auth />
      {user ? (
        <>
          <h1>Latest Posts</h1>
          <Postlist posts={posts} removePost={removePost} />
          <NewPost
            onCreated={() => {
              window.location.reload();
            }}
          />
        </>
      ) : (
        <p>Login to see posts</p>
      )}
    </div>
  );
}

export default HomeScreen;
