import { useEffect, useState } from "react";
import * as NovedadesServices from '../services/novedades.service.js';
import {Link, useParams} from 'react-router-dom';

function Novedades() {
    const [novedades, setNovedades] = useState([])

    useEffect(() => {
        NovedadesServices.traerNovedades()
        .then(data => {
            setNovedades (data)
        })
        
    }, [])


    let novedadesElements = novedades.map((elemento, i) => 
            (
                <li key={i}>
                    <h2 className="titulo">{elemento.name} </h2>
                

                    <img src= {`../../img/novedades/${elemento.img}`}   />

                    <Link to={`/novedades/${elemento._id}`} type="button" className="btn btn-outline-warning mt-5 mb-5" >Ver detalles</Link>

                </li>
            )
    )
    
    return (
        <div>
        <h1 className="titulo m-5">Novedades:</h1>
        <div className="films container">
            <ul className="d-flex flex-column-reverse">
                {novedadesElements}
            </ul>
        </div>
        </div>
    )

}

export default Novedades