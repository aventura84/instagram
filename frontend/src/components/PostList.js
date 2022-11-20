import { Post } from "./Post";

const PostList = ({ posts, removePost }) => {
  return posts && posts.length ? (
    <ul className="post-list">
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <Post post={post} removePost={removePost} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>There are not posts yet...</p>
  );
};

export default PostList;
