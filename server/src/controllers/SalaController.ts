import {Request,Response}  from 'express';
import { getRepository} from 'typeorm';
import Sala from '@models/Sala'; 

class SalaController{

    async create (request:Request,response: Response){
      
      try {
        const repo = getRepository(Sala);
        const res = await repo.save(request.body);
        return response.status(201).json(res);
     
    } catch (err) {
        console.log('err.message :>> ', err.message);
        return response.status(400).send();
      }
    }


     async  index (request:Request,response: Response)  {
      response.json(await getRepository(Sala).find());
    }


  




}

export default SalaController;