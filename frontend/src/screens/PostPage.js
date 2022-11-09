import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import UserPosts from "../components/UserPosts";
import { usePost } from "../hooks/usePost";

const Postpage = () => {
  const { id } = useParams();

  const { post, loading, error } = usePost(id);

  if (loading) return <p>Cargando post...</p>;
  if (error) return <ErrorMessage message={error} />;

  const user = post.user;
  return (
    <section>
      <h1>User {user.email}</h1>
      <section class="user-data">
        <p>User id: {user.id}</p>
        <p>Registered on {new Date(user.created_at).toLocaleString()}</p>
      </section>
      <UserPosts id={user.id} />
    </section>
  );
};

export default Postpage;
