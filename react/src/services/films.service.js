async function findAll() {
    return fetch('http://localhost:2022/api/films')
    .then(response => response.json())
}

async function verFilms(id) {
    return fetch(`http://localhost:2022/api/films/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw new Error('No se pudo obtener las novedades')
            }
    })
    
}

export{
    findAll,
    verFilms
}