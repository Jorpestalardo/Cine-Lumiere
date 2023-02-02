async function findAll(id) {
    return fetch(`http://localhost:2022/api/films/${id}/reviews`)
    .then(response => response.json())

}

async function eliminarReview(id, id_review) {
    return fetch(`http://localhost:2022/api/films/${id}/reviews/${id_review}`, {
        method: 'DELETE',

        body: JSON.stringify(id_review)
    })

    .then(response => response.json())
}

async function createReview(id, reviews) {
    return fetch(`http://localhost:2022/api/films/${id}/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reviews)
    })
    .then(response => response.json())
}

export{ 
    findAll,
    eliminarReview,
    createReview
}