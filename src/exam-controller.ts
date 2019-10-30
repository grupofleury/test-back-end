import axios from 'axios'

export class ExamsController{
    
    finAll(){
        var instance = axios.create({
            baseURL: 'http://www.mocky.io/v2',
            timeout: 10000
          });

         return instance.get("/5d681ede33000054e7e65c3f")

    }

    finById(id){
        var instance = axios.create({
            baseURL: 'http://www.mocky.io/v2',
            timeout: 10000
          });

         instance.get("/5d681ede33000054e7e65c3f").then(response=>{
            var exam = null 
            response.data.exams.forEach(element => {
                 if(element.id == id){
                     exam = element
                 }
             });
             return exam
         })

    }
}