import { useEffect, useState } from "react";
import axios from 'axios';

export const Movie = () => {
    const [movies, setMovies] = useState();
    const [newMovie, setNewMovie] = useState({title: '', description: '', age: ''});

    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = () => {
        axios.get('http://localhost:5000/movies')
        .then(({data}) => setMovies(data))
        .catch((error) => console.log(error))
    }

    const addedNewMovie = (movie) => {
        axios.post(`http://localhost:5000/movies`, movie)
        .then(() => {
            getMovies()
            setNewMovie({title: '', description: '', age: ''})
        })
    }

    const deletemovei = (id) => {
        axios.delete() 
    }
    return (
        <div>
            <h1>Movies</h1>
            <ul>
                {
                    movies &&
                    movies.map((movie) => (
                        <li key={movie.id}>
                            <p>{movie.title}</p>
                            <p>{movie.description}</p>
                            <p>{movie.age}</p>
                            <button onClick={() => deletemovei()}>Delete</button>
                        </li>
                    ))
                }
            </ul>

            <input type="text" placeholder="title" value={newMovie.title} onChange={(e) => {setNewMovie({...newMovie, title: e.target.value})}} />
            <input type="text" placeholder="description"  value={newMovie.description} onChange={(e) => {setNewMovie({...newMovie, description: e.target.value})}}  />
            <input type="text" placeholder="age"  value={newMovie.age} onChange={(e) => {setNewMovie({...newMovie, age: e.target.value})}} />
            <button onClick={() => addedNewMovie(newMovie)}>Added movie</button>
        </div>
    );
}

