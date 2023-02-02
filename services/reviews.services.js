import { MongoClient, ObjectId } from "mongodb";

const client =  new MongoClient("mongodb://127.0.0.1:27017")

const db = client.db('proyectoTercerParcial')
const reviews = db.collection('Reviews')

async function create(id, review) {
    const newReview = {
        ...review,
        film_id : new ObjectId(id)
    }


    return client.connect()
    .then(async function () {
        return reviews.insertOne(newReview)
    })

}

async function findAll(id) {

    const filter = {
        film_id : new ObjectId(id)
    }


    return client.connect()
        .then(async function () {
            return reviews.find(filter).toArray()
        })
}

async function traerReviewById(id) {
    return client.connect()
        .then(function () {
            return reviews.findOne({ _id: new ObjectId(id)})
        })
}

async function eliminarReview(id_review, id) {
    return client.connect()
        .then(function () {
            return reviews.deleteOne({ _id: new ObjectId(id_review) }) && reviews.findOne({film_id: new ObjectId(id)})
        })
}

export {
    create,
    findAll,
    traerReviewById,
    eliminarReview
}