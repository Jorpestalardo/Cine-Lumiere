import { Link } from "react-router-dom"


function cuatrocerocuatro() {

    return (
        <div className="container">

            <section className="encabezado">
                <h1 className="neon">404</h1>
                
            </section>

            <section className="container qs">
            <h2><span>P</span>agina NO encontrada</h2>
            <p>
            te invitamos a que veas nuestros films clasicos!
            <Link to={`/films/`}><i className="bi bi-caret-down">MOVIES!</i></Link>

            </p>
        </section>

        </div>
    )

}

export default cuatrocerocuatro