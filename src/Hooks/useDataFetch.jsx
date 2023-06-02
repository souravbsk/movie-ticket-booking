import React, { useEffect, useState } from 'react';

const useDataFetch = () => {
    const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);
  return [movies, setMovies];
};

export default useDataFetch;