import React, { useState, useEffect } from "react";
import axios from "axios";

import KaydedilenlerListesi from "./Filmler/KaydedilenlerListesi";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import FilmListesi from "./Filmler/FilmListesi";
import Film from "./Filmler/Film";
import { Link } from "react-router-dom";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get("http://localhost:5001/api/filmler") // Burayı Postman'le çalışın
        .then((response) => {
          // Bu kısmı log statementlarıyla çalışın
          // ve burdan gelen response'u 'movieList' e aktarın
        })
        .catch((error) => {
          console.error("Sunucu Hatası", error);
        });
    };
    FilmleriAl();
  }, []);

  const KaydedilenlerListesineEkle = (id) => {
    // Burası esnek. Aynı filmin birden fazla kez "saved" e eklenmesini engelleyin
  };

  return (
    <div>
      <KaydedilenlerListesi
        list={
          [
            /* Burası esnek */
          ]
        }
      />

      <Switch>
        <Route path="/about">
          <div>about</div>
        </Route>
        <Route path="/users">
          <div>users</div>
        </Route>
        <Route path="/">
          <div>bu div</div>
        </Route>
      </Switch>
    </div>
  );
}
