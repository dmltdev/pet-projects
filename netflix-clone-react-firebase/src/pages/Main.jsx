import { React, useState, useEffect } from "react";
import requests from "../Requests";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requests.requestPopular).then(response => {
      setMovies(response.data.results);
    });
  }, []);

  const movie = movies.length > 0 ? movies[Math.floor(Math.random() * movies.length)] : null;

  console.log(movie);
  return (
    <div>
    </div>
  )
};

export default Main;
