/**
 * @fileoverview Favorites routes
 *
 * @author Ayelegun Kayode Michael
 *
 * @requires NPM:express
 * @requires ../controllers/Favorites
 * @requires ../middleware
 */

import { Router } from 'express';
import Favorites from '../controllers/Favorites';
import middleware from '../middleware';

const favoritesController = new Favorites();
const routes = new Router();

routes.use(middleware.auth.authenticateUser);

routes.post('/:teamId', middleware.check.teamWithParamsIdExists, favoritesController.create);
routes.get('/:userId', favoritesController.get);

export default routes;
