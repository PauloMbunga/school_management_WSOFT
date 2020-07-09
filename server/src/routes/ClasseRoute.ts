
import { Router } from 'express';
import ClasseController from '@controllers/ClasseController';

const ClasseRouter = Router();



const classeController = new ClasseController();


ClasseRouter.post('/classe', classeController.create);
ClasseRouter.get('/classe', classeController.index);



export default ClasseRouter;


