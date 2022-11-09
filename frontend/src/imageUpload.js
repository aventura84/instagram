import React, { useState } from "react";
import { Button } from "material-ul/core";
import { useLocalStorage } from "./hooks/useLocalStorage";

function ImageUpload({ username }) {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  const handleChange = (e) => {
    if (e.target.files(0)) {
      setImage(e.target.files(0));
    }
  };
  const handleUpload = () => {
    const uploadTask = useLocalStorage.ref("images/${image.name}").put(image);
    uploadTask.on(
      "stage_changed",
      (snapshot) => {
        //progress function...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        //Error function...
        console.log(error);
        alert(error.message);
      },
      () => {
        //complete function...
        localStorage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            //post image inside db
          });
        setProgress(0);
        setCaption("");
        setImage(null);
      }
    );
  };
  return (
    <div className="imageupload">
      <progress value={progress} max="100" />
      <input
        type="text"
        placeholder="Enter a caption..."
        onChange={(event) => setCaption(event.target.value)}
      />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default ImageUpload;
