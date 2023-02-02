import * as reviewServices from '../../services/reviews.services.js';
import * as FilmsServices from '../../services/films.services.js';

function createReview(req, res){
    const id = req.params.idFilm
    const reviews = {
        usuario: req.body.usuario,
        testimonio: req.body.testimonio
    }

    reviewServices.create(id, reviews)
    .then(function (result){
        res.status(201).json(result)
    })

}

function findReview(req, res){
    const id = req.params.idFilm

    reviewServices.findAll(id)
    .then(function(result){
        res.status(200).json(result)
    })
}

function findById(req, res){
    const id_review = req.params.idReview

    reviewServices.traerReviewById(id_review)
    .then(function (review){
        if (review){
            res.status(200).json(review)
        } else {
            res.status(404).json({message: "No se pudo encontrar la review"})
        }
    })
}

function deleteById(req, res){

    const id = req.params.idFilm
    const id_review = req.params.idReview

        reviewServices.eliminarReview(id_review, id)
            .then(function (review){
                if (review){
                    res.status(200).json({message: "La review fue eliminada con éxito"})
                }else{
                    res.status(404).json({message: "La review no se pudo eliminar :("})
                }
            })



}

export {
    createReview,
    findReview,
    findById,
    deleteById
}