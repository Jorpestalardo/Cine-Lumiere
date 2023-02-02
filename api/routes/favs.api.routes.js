import express from 'express' 
import * as filmFavController from '../controllers/filmFav.api.controller.js'

const router = express.Router()

router.route('/api/users/:user_id/filmfav')
    .get(filmFavController.getFilmsFavs)
    .post(filmFavController.addFilmsFavs)


router.route('/api/users/:user_id/filmfav/:film_id')
    .delete(filmFavController.deleteFilmsFavs)



export default router;