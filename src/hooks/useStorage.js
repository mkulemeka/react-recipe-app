import { useState, useEffect } from "react";

const useStorage = (file) => {
  const [error, setError] = useState(null);
  const [url, setURL] = useState(null);

  useEffect(() => {
    const storageReference = //firebaseStorage.ref(file.name);

    storageReference.put(
      file.on(
        "state_change",
        (err) => {
          setError(err);
        },
        async () => {
          const surl = await storageReference.getDownloadURL();
          setURL(surl);
        }
      )
    );
  }, [file]);

  return { url, error };
};

export default useStorage;
