
import { Router } from 'express';
import SalaController from '@controllers/SalaController';

const SalaRouter = Router();



const salaController = new SalaController();


SalaRouter.post('/sala', salaController.create);
SalaRouter.get('/sala', salaController.index);



export default SalaRouter;


