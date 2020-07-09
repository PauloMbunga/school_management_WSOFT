
import { Router } from 'express';
import TurmaController from '@controllers/TurmaController';

const TurmaRouter = Router();



const turmaController = new TurmaController();


TurmaRouter.post('/turma', turmaController.create);
TurmaRouter.get('/turma', turmaController.index);



export default TurmaRouter;


