
import { Router } from 'express';
import CursoController from '@controllers/CursoController';

const CursoRouter = Router();



const cursoController = new CursoController();


CursoRouter.post('/curso', cursoController.create);
CursoRouter.get('/curso', cursoController.index);



export default CursoRouter;


