import React from 'react';


const MovieCard = ({ movie, index }) => {
    const { imdbID, Year, Poster, Title, Type } = movie;
    return (
        <div className="movie" key={index}>
            <div>
                <p>{Year}</p>
                <p>{imdbID}</p>
                <p>{movie.key}</p>
                <p>{movie.index}</p>

            </div>

            <div>
                <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
            </div>

            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
        </div>
    );
};

export default MovieCard;
