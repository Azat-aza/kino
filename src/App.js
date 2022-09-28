import React, { useState, useEffect } from "react";
import './index.css'
import Movie from './companent/Movie'

const API_KEY = '365580a077bde095848bee15cf5a0299'
const MOVIE_API = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  

  const dataRequest = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }
  useEffect(() => {
    dataRequest(MOVIE_API)
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dataRequest(SEARCH_API+search)

  }

  const handleOnChange = e => {
     setSearch(e.target.value)
  }

  return (
    
    <>
      <div className="header">
        <div className="container">
          <h1>React Movie App Aza_Graza</h1>
          <form onSubmit={handleOnSubmit}>
          <input placeholder='Поиск...' onChange={handleOnChange} />
          </form>
        </div>
      </div>
      <div className="container">
        <div className="card-list">
          {movies.map((movie) => {
            return < Movie key={movie.id} 
            poster_path={movie.poster_path} 
            title={movie.title}
            name={movie.name}
            vote_average={movie.vote_average}
            overview={movie.overview}
            />
          })}

          
        </div>
      </div> 
            <hr></hr>

       <div className="futter">
       <img className="icoon" src={"https://images.squarespace-cdn.com/content/v1/51c9eab8e4b0814177b513c2/1395765712840-JURHR4V4QFLOE0656HTK/iconmonstr-facebook-5-icon-256.png"}/>
                 <img className="icon" src={"https://img.icons8.com/material-outlined/384/whatsapp--v1.png"}/>
                 <img className="icon" src={"https://cdn.coursehunter.net/category/github.png"}/>
                 <img className="icon" src={"https://cdn.icon-icons.com/icons2/2428/PNG/512/instagram_black_logo_icon_147122.png"}/>
                 <br></br><br></br><h1 className="nom">НОМЕР:(505)408727</h1>

            </div>
    </>

  );
        }
        

export default App;

// "homepage":"http://Azat-aza"