import { useEffect, useState } from "react"
import * as ReviewServices from '../services/reviews.service.js';
import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Notificar from "./Notify.jsx";

function Reviews() {
    const {id} = useParams()
    const {id_review} = useParams()

    const [opiniones, setOpiniones] = useState([])

    const [reviews, setReviews] = useState({})
    const [usuario, setUsuario] = useState('')
    const [testimonio, setTestimonio] = useState('')


    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function changeUsuario(e)  {
        setUsuario(e.target.value)
    } 

    function changeTestimonio(e)  {
        setTestimonio(e.target.value)
    } 


    useEffect(() => {
        ReviewServices.findAll(id)
        .then(data => {
            setOpiniones(data)
        })
    }, [id])

    function eliminarReview(e) {
        e.preventDefault()
        ReviewServices.eliminarReview(id_review)
    }

    function agregarReview(e) {
        e.preventDefault()
        ReviewServices.createReview({usuario, testimonio})

    }

    let opinionesElements = opiniones.map((elemento, i) => 
            (
                <li className="m-3" key={i}>
                    <h2 className="titulo fs-1">{elemento.usuario} </h2>
                    <p className="sinop"><span className="font-weight-bold">Comentario:</span> {elemento.testimonio}</p>
                </li>

            )
    )
    
    return (
        <div className="container">
            <div className="d-flex flex-column align-items-center">
            <ul>
                {opinionesElements}
            </ul>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header className="modalEliminar" closeButton >
                <Modal.Title className="modalTtile ">¿Estás seguro de que quieres eliminar esta novedad?</Modal.Title>
              </Modal.Header>
            <Modal.Body className="modalEliminar">            
              <div className="d-flex flex-row justify-content-center">
            <form onSubmit={eliminarReview}>
                <button type="submit" value={id} onClick={Notificar} className="btn btn-danger mt-5 mb-5">Eliminar</button>
            </form>
            <Button variant="secondary" className="m-5 " onClick={handleClose}>
                      Volver
                </Button>
            </div>

            </Modal.Body>


            </Modal>
            <div className="container d-flex flex-column align-items-center">
                <p>Elimina tu comentario</p>
            <button variant="primary" onClick={handleShow} value={id}  className="btn btn-outline-danger mt-5 mb-5">Eliminar</button>
            </div>

            <div className="container d-flex flex-column align-items-center">
            <h3 className="regisTitle text-center fs-1 m-5"><span className="lanz">Pon un Comen</span>tario!</h3>
            <form  className="regis d-flex flex-column" onSubmit={agregarReview}>
                <label htmlFor="">Tu nombre</label>
                <input className="inpu" type="text" name="usuario" onChange={changeUsuario} value={usuario}/>
                <label htmlFor="">Comparte tu opinión</label>
                <textarea className="inpu" onChange={changeTestimonio} value={testimonio} rows="5" cols="50"></textarea>

                <button className="btn btn-warning m-5" type="submit">Agregar</button>
            </form>
            </div>
        </div>
    )
}

export default Reviews