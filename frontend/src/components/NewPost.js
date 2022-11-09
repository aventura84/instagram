import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { sendPostService } from "../services.js";

function NewPost() {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [image, setImage] = useState(null);
  const { token } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      setSending(true);
      const data = new FormData(e.target);
      await sendPostService({ data, token });
      e.target.reset();
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <h1> Add New Post</h1>
        <fieldset>
          <label htmlFor="text">Text</label>
          <input type="text" id="text" name="text" required />
        </fieldset>
        <fieldset>
          <label htmlFor="image">Image</label>
          {image ? (
            <figure>
              <img
                src={URL.createObjectURL(image)}
                style={{ width: "100px" }}
                alt="Preview"
              />
            </figure>
          ) : null}
          <input
            type="file"
            id="image"
            name="image"
            accept={"image/*"}
            onChange={(e) => setImage(e.target.files[0])}
          />
          {image ? <p>Hay una imagen seleccionada</p> : null}
        </fieldset>
        <button>Send Post</button>
      </form>
      {error ? <p>{error}</p> : null}
    </>
  );
}
export default NewPost;
