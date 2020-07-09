
import { Router } from 'express';
import AnoLectivoController from '@controllers/AnoLectivoController';

const AnoLectivoRouter = Router();



const anoLectivoController = new AnoLectivoController();


AnoLectivoRouter.post('/ano_lectivo', anoLectivoController.create);
AnoLectivoRouter.get('/ano_lectivo', anoLectivoController.index);
AnoLectivoRouter.get('/ano_lectivo_max', anoLectivoController.max_anolectivo);


export default AnoLectivoRouter;


