import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import AboutView from "./components/about";
import { Switch, Route } from "react-router-dom";
import React from "react";
import SearchView from "./components/searchview";
import { useState, useEffect } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=88dc9b885ceb3b71099af50619a53612&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((reponse) => reponse.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
