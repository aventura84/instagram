import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import UserPosts from "../components/UserPosts";
import { useUser } from "../UserContext";

export const UserPage = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);

  if (loading) return <p>Loading user data...</p>;
  if (error) return <ErrorMessage message={error} />;
  return (
    <section>
      <h1>User {user.email}</h1>
      <p>User id: {user.id}</p>
      <p>Register on:{new Date(user.created_at).toLocaleString()}</p>
      <UserPosts id={user.id} />
    </section>
  );
};
