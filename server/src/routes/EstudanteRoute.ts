
import { Router } from 'express';
import EstudanteController from '@controllers/EstudanteController';

const EstudanteRouter = Router();



const estudanteController = new EstudanteController();


EstudanteRouter.post('/estudante', estudanteController.create);
EstudanteRouter.get('/estudante', estudanteController.index);



export default EstudanteRouter;


