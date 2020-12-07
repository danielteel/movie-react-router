import React from 'react';

import  {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    useParams
  } from 'react-router-dom';

  export default function Movie( {movies: {movies} } ){
        let {movieIndex}=useParams();

        return (<>
                    <div class="backToResults">
                        <Link to="/">Back to results</Link>
                    </div>
                    <main id="mainContent">
                        <section id="movieInfo">
                            <div id="coverArt">
                                <img id="coverArtImage" src={movies[movieIndex].img} alt="cover art"/>
                            </div>
                            <div id="movieTitle">
                                <h3>{movies[movieIndex].title}</h3>
                            </div>
                            <div id="releaseDate">
                                <h4>{movies[movieIndex].releaseDate}</h4>
                            </div>
                            <div id="genres-actors">
                                <div id="genres">
                                    {movies[movieIndex].genres}
                                </div>
                                <div id="actors">
                                    {movies[movieIndex].actors}
                                </div>
                            </div>
                            <div id="movieDescription">
                                {movies[movieIndex].description}
                            </div>
                        </section>
                        <form id="leaveComment">
                            <label>Leave a comment:</label>
                            <input type="text"/>
                            <button type="button">Submit</button>
                        </form>
                    </main>
        </>
        )
  }

