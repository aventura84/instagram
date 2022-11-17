const PostList = ({ posts, removePost }) => {
  return posts.length ? (
    <ul className="post-list">
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <PostList post={post} removePost={removePost} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>There are not posts yet...</p>
  );
};

export default PostList;
