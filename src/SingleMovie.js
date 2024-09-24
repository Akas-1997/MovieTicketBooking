import React, { useEffect, useState } from 'react'
import { useGlobalContext } from './context'
import { useNavigate, useParams } from 'react-router-dom';

export default function SingleMovie() {
  debugger; const [imdbid, setImdbid] = useState();
  const { movie } = useGlobalContext();
  const navigate = useNavigate();
  const { imdbID } = useParams();
  useEffect(() => {
    setImdbid(imdbID);
  }, []

  )

  if (!movie || movie.length === 0) {
    return <p>Loading...</p>; // Render loading state until data is available
  }


  const handleClick = () => {
    const movieid = imdbid
    navigate(`/Booking/${movieid}`);
  }

  return (
    <>
      {movie.map((clickedMovie) => {
        debugger;
        if (clickedMovie.imdbID === imdbID) {
          var { Poster, Title, Type, Year, imdbID: movieImdbID } = clickedMovie

          return (
            <div key={movieImdbID}>
              <h2>{Title}</h2>
              <img src={Poster} />
              <h2>{Type}</h2>
              <h2>{Year}</h2>
              <h2>{movieImdbID}</h2>
              <button onClick={handleClick}>Book Now</button>
            </div>
          )
        } return null;
      }
      )
      }
    </>
  )
}
