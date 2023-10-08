import React, { useState, useEffect} from "react";
import axios from "axios";

function SWMovies() {
    const [number, setNumber]  = useState(1);
    const [movie, setMovie ]  = useState("");
    useEffect(() => {
       async function getData() {
        const response = await axios.get(`https://swapi.dev/api/films/${number}/`);
        setMovie(response.data);
        console.log('response:', response);
       }
       getData();
    }, [number]);
    return (
        <div>
            <h1>Pick a movie</h1>
            <h4>You chose: {movie.title} </h4>
            <p>{movie.opening_crawl}</p>
            <select value={number} onChange={(e) => setNumber(e.target.value)}>
                <option value="1">The Phantom Menace</option>
                <option value="2">Attack of the Clones</option>
                <option value="3">Revenge of the Sith</option>
                <option value="4">A New Hope</option>
                <option value="5">The Empire Strikes Back</option>
                <option value="6">Return of the Jedi</option>
                <option value="7">The Force Awakens </option>
            </select>
        </div>
    );
}

export default SWMovies;