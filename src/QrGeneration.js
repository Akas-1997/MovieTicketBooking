import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';  // Import QRCodeCanvas
import { useParams } from 'react-router-dom';
import { useGlobalContext } from './context';

export default function QrGeneration() {
    const { movie } = useGlobalContext();
    const { movieid } = useParams();

    if (!movie || movie.length === 0) {
        console.log("No movies found");
        return <p>No movies found</p>;
    } else {
        console.log("Movies found");
    }
     // Find the movie that matches the movieid from the URL
debugger;
     const clickedMovie = movie.find(m => m.imdbID === movieid);
     console.log(clickedMovie)
     // If no matching movie is found
     if (!clickedMovie) {
         return <p>Movie not found</p>;
     }
 
     // Create the JSON data for the QR code based on the clicked movie
     const jsonData = {
         year: clickedMovie.Year,
         title: clickedMovie.Title,
         type: clickedMovie.Type,
         imdb: clickedMovie.imdbID
     };

    return (
        <div>
            <h2>QR Code</h2>
            {movie.map((clickedMovie) => {
                // Match the movie ID with the movieid from the URL params
                if (clickedMovie.imdbID === movieid) {
                    const { Poster, Title, Type, Year, imdbID: movieImdbID } = clickedMovie;

                    
               

                    console.log('QR Data:', JSON.stringify(jsonData));

                    // Return QRCodeCanvas component
                    return (
                        <div key={movieImdbID}>
                            <QRCodeCanvas value={JSON.stringify(jsonData)} size={256} />
                            <h3>{Title} ({Year})</h3>
                            <img src={Poster} alt={Title} style={{ width: '200px' }} />
                        </div>
                    );
                }
                return null; // Return null if movie does not match movieid
            })}
        </div>
    );
}
