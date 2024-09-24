import React, { useContext, useEffect, useState } from "react";

const API_URL = 'http://www.omdbapi.com/?apikey=92d87abf&s=titanic'
const AppContext = React.createContext();
const AppProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setMovie(data.Search)
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        getMovies(API_URL);
    }, [])
    //provider
    return <AppContext.Provider value={{ movie }}>{children}</AppContext.Provider>
}
const useGlobalContext = () => {
    return useContext(AppContext);
}
export { AppContext, AppProvider, useGlobalContext }