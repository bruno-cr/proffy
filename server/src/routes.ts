import express from 'express'
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router();
const classesControllers = new ClassesController();
const connectControllers = new ConnectionsController();


routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);


routes.get('/connections', connectControllers.index);
routes.post('/connections', connectControllers.create);



export default routes;