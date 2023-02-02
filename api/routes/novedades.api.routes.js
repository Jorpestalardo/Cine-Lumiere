import express from 'express'
import * as NovedadesApiController from '../controllers/novedades.api.controller.js'
//import {isLogin, isAdmin} from '../../middleware/auth.middleware.js'
import {isLogin} from '../../middleware/auth.middleware.js'



const route = express.Router()


route.route('/api/novedades')
    .get([isLogin], NovedadesApiController.findAll)
    .post([isLogin], NovedadesApiController.create)

route.route('/api/novedades/:idNovedad')
    .get([isLogin], NovedadesApiController.findOne)
    .patch([isLogin], NovedadesApiController.editById)
    .delete([isLogin], NovedadesApiController.deleteById)




export default route