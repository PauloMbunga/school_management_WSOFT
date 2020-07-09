import {Request,Response}  from 'express';
import { getRepository} from 'typeorm';
import Classe from '@models/Classe'; 

class ClasseController{

    async create (request:Request,response: Response){
    
      try {
        const repo = getRepository(Classe);
        const res = await repo.save(request.body);
        return response.status(201).json(res);
     
    } catch (err) {
        console.log('err.message :>> ', err.message);
        return response.status(400).send();
      }
    }


     async  index (request:Request,response: Response)  {
      response.json(await getRepository(Classe).find());
    }


  




}

export default ClasseController;