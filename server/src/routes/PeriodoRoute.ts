
import { Router } from 'express';
import PeriodoController from '@controllers/PeriodoController';

const PeriodoRouter = Router();



const periodoController = new PeriodoController();


PeriodoRouter.post('/periodo', periodoController.create);
PeriodoRouter.get('/periodo', periodoController.index);



export default PeriodoRouter;


