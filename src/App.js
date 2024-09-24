import logo from './logo.svg';
import './App.css';
import Home from './Home';
import SingleMovie from './SingleMovie';
import Error from './Error';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import Booking from './Booking';
import LandingPage from './LandingPage';
import Movies from './Movies';
import QrGeneration from './QrGeneration';
import UpcomingMovie from './UpcomingMovie';
import NearbyEvents from './NearbyEvents';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/latestmovies' element={<Movies />} />
          <Route path='/movie/:imdbID' element={<SingleMovie />} />

          <Route path='/upcomingmovies' element={<UpcomingMovie />} />
          <Route path='/movie/:imdbID' element={<SingleMovie />} />

          <Route path='/nearbyevents' element={<NearbyEvents />} />

          <Route path='*' element={<Error />} />
          <Route path='/Booking/:movieid' element={<Booking />} />
          <Route path='/bookwithqr/:movieid' element={<QrGeneration />} />
        </Routes>

      </BrowserRouter>



    </div>
  );
}

export default App;
