import { useState, useEffect } from "react";
const useRecipesFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        "X-RapidAPI-Key": `${process.env.REACT_APP_RAPID_API_KEY}`,
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        setData(response.results);
        SetIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, [url]);

  return { data, isLoading };
};

export default useRecipesFetch;
