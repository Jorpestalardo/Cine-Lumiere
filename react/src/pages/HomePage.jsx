import { Link } from "react-router-dom"
import MoviesSection from "./../pages/MoviesSection"



function HomePage() {

    return (
        <div>

            <section className="encabezado">
                <h1 className="neon">Lumière</h1>
                
                <Link to={`/films/`}><i className="bi bi-caret-down"></i></Link>
            </section>

            <section className="container qs">
            <h2>¿<span>Q</span>uienes somos?</h2>
            <p>
                Somos dos amigas amantes del cine. Decidimos crear Lumiére para compartir con todos los
                cinefilos internautas, criticas, novedades, opiniones, y poder hacer crecer ésta comunidad.
                En nuestro sitio subimos contenido de peliculas clasicas todos los meses, recomendaciones, puntuaciones, trailers, etc.
                Ademas podras compartir con todos novedades de peliculas que crees que deberiamos ver, ( mejor no verlas).
                Esperamos que disfrutes del contenido.
            </p>
            <p>
            Y recordemos que: </p>  
            <q>Lo bueno del cine es que durante dos horas los problemas son de otros.</q>     
            
        </section>
            <section>
                <MoviesSection/>
            </section>

        </div>
    )

}

export default HomePage