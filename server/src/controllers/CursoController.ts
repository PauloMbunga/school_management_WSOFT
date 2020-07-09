import {Request,Response}  from 'express';
import { getRepository} from 'typeorm';
import Curso from '@models/Curso'; 

class CursoController{

    async create (request:Request,response: Response){
    
      try {
        const repo = getRepository(Curso);
        const res = await repo.save(request.body);
        return response.status(201).json(res);
     
    } catch (err) {
        console.log('err.message :>> ', err.message);
        return response.status(400).send();
      }
    }


     async  index (request:Request,response: Response)  {
      response.json(await getRepository(Curso).find());
    }


  




}

export default CursoController;