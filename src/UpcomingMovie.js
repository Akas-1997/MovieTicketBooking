import React from 'react'
import { NavLink } from "react-router-dom";
import { useGlobalContext } from './context'

export default function UpcomingMovie() {
    const { movie } = useGlobalContext();
    return (
        <>
            <section className='movie-page'>
                <div className='grid grid-4-col'>


                    {movie.map((curMovie) => {
                        // destructuring
                        const { imdbID, Title, Poster } = curMovie
                        return <NavLink to={`/movie/${imdbID}`} key={imdbID}>
                            <div className='card'>
                                <div className='card-info'>
                                    <h2>{Title}</h2>
                                    <img src={Poster} alt={imdbID} />
                                </div>
                            </div>

                        </NavLink>

                    })}
                </div>

            </section>
        </>
    )
}
