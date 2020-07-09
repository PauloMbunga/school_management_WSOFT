import { Router } from 'express';

import salaRoute from './SalaRoute';
import periodoRoute from './PeriodoRoute';
import cursoRoute from './CursoRoute';
import classeRoute from './ClasseRoute';
import anoLectivoRoute from './AnoLectivoRoute';
import turmaRoute from './TurmaRoute';
import estudanteRoute from './EstudanteRoute';

const routes = Router();

routes.use(salaRoute);
routes.use(periodoRoute);
routes.use(cursoRoute);
routes.use(classeRoute);
routes.use(anoLectivoRoute);
routes.use(turmaRoute);
routes.use(estudanteRoute);


export default routes;