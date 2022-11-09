const PostList = ({ posts }) => {
  return posts.length ? (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <article>
            <img src={`${process.env.REACT_APP_BACKEND}/uploads/${post.image}`} alt="Post" />
            <p>{post.text}</p>
          </article>
        </li>
      ))}
    </ul>
  ) : (
    <p>There are not posts yet...</p>
  );
};

export default PostList;
