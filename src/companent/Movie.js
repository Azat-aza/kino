
import React from "react";
const IMG_URL = 'https://image.tmdb.org/t/p/w1280'
function Movie({poster_path, title, name, vote_average, overview}) {

const setColor = (num) =>{
    if(num >= 8){
        return 'red'
    }

}

    return (
        <div class="card">
            <img className="image" src={IMG_URL + poster_path} alt={title   } />
            <div className="info">
                <h4>{title || name}</h4>
                <span className={`rate ${setColor(vote_average)}`} >{vote_average}</span>
                <div className="overview">{overview.slice(0 ,120)}...</div>
            </div>

        </div>

    )
}
export default Movie



