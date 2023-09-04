const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);



/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-user', services.add_user)

/**
 *  @description for update user
 *  @method GET /update-user
 */

route.get('/update-user',services.update_user)

 route.post('/api/items', controller.create);
 route.get('/api/items', controller.find);
 route.put('/api/items/:id', controller.update);
 route.delete('/api/items/:id', controller.delete);

route.post('/api/items', controller.create);
module.exports = route