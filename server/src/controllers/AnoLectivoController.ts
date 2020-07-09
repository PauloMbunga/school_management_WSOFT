import {Request,Response}  from 'express';
import { getRepository} from 'typeorm';
import AnoLectivo from '@models/AnoLectivo'; 

class AnoLectivoController{

    async create (request:Request,response: Response){
    
      
      try {
        const repo = getRepository(AnoLectivo);
        const res = await repo.save(request.body);
        return response.status(201).json(res);
     
    } catch (err) {
        console.log('err.message :>> ', err.message);
        return response.status(400).send();
      }
    }


     async  index (request:Request,response: Response)  {
      response.json(await getRepository(AnoLectivo).find());
    }


    async  max_anolectivo (request:Request,response: Response)  {
      // response.json(await getRepository(AnoLectivo).find());   
      //    async  max_anolectivo (request:Request,response: Response)  {
     // response.json(await getRepository(AnoLectivo).find());
        response.json (await getRepository(AnoLectivo)
       .createQueryBuilder("ano_lectivo")
       .select("MAX(ano_lectivo.description)")
       .getRawOne())
   
       }

      
    


  




}

export default AnoLectivoController;