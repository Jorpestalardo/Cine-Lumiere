import { useEffect, useState } from "react";
import * as FilmsServices from '../services/films.service.js';
import {Link, useParams} from 'react-router-dom';

function MoviesSection() {
    const [films, setFilms] = useState([])

    useEffect(() => {
        FilmsServices.findAll()
        .then(data => {
            setFilms (data)
        })
        
    }, [])


    let filmsElements = films.map((elemento, i) => 
            (
                <li key={i}>
                    <h2 className="titulo">{elemento.name} </h2>
                    <p className="sinop">{elemento.sinopsis}</p>
                

                    <img src= {`../../img/${elemento.img}`}   />

                    <Link to={`/films/${elemento._id}`} type="button" className="btn btn-outline-warning mt-5 mb-5" >Ver detalles</Link>

                </li>

            )
    )
    
    return (
        <div>
            <h1 className="titulo m-5">Movies:</h1>
        <div className="films container">
            <ul>
                {filmsElements}
            </ul>
        </div>
        </div>
    )

}

export default MoviesSection