import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Movie from './components/Movie';

import  {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';


const movies={
  movies: [
              {
                  title: "Star wars",
                  img: "https://play-lh.googleusercontent.com/7OTx1DboUIszuMbHZwFHhYOLRQspWozEx7xFtYKG674mtGA_PSRPGIdtv7jmR4jQ9d0=w200-h300-rw",
                  releaseDate:"a while ago",
                  genres:"fantasy",
                  actors:"jimothy walton",
                  description:"movie about space",
              },{
                  title: "Caddy Shack",
                  img: "https://play-lh.googleusercontent.com/7OTx1DboUIszuMbHZwFHhYOLRQspWozEx7xFtYKG674mtGA_PSRPGIdtv7jmR4jQ9d0=w200-h300-rw",
                  releaseDate:"yesterday",
                  genres:"golfy",
                  actors:"carry walton",
                  description:"movie about golf",
              },
          ]
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Header/>
        <Switch>

          <Route exact path="/">
              <Home movies={movies}/>
          </Route>

          <Route path="/movie/:movieIndex">
              <Movie movies={movies}/>
          </Route>

          <Route path="/login">
              <Login/>
          </Route>

        </Switch>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
