async function traerNovedades() {
    return fetch('http://localhost:2022/api/novedades',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            }else {
                throw new Error('No se pudo obtener las novedades')
            }
    })
}

async function findOne(id) {
    return fetch(`http://localhost:2022/api/novedades/${id}`,{
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

async function create(novedad) {
    return fetch('http://localhost:2022/api/novedades', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify(novedad)
    })
    .then(response => {
        if(response.ok){
            response.json()
        }else{
            throw new Error('No se pudo acceder para crear una novedad en el detalle de la misma')
        }
    })
}

async function eliminarNovedades(id) {
    return fetch(`http://localhost:2022/api/novedades/${id}`, {
        method: 'DELETE',
        headers: {
            'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify(id)
    })
    .then(response => {
        if(response.ok){
            response.json()
        }else{
            throw new Error('No se pudo obtener el detalle de la novedad para eliminarla')
        }
    })
}

async function editarNovedades(id, novedad) {
    return fetch(`http://localhost:2022/api/novedades/${id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify(novedad)
    })
    .then(response => {
        if(response.ok){
            response.json()
        }else{
            throw new Error('No se pudo acceder para crear una novedad en el detalle de la misma')
        }
    })
}




export {
    traerNovedades,
    findOne,
    create,
    eliminarNovedades,
    editarNovedades
}