import * as express from 'express'

import { ExamsController } from './exam-controller';
import { ClientController } from './client-controller';

const server = express()




server.get("/get-exames", (_, res) => {
    const examController = new ExamsController()
    examController.finAll().then((response)=>{
        res.send(response.data)
    })
  });

server.get("/get-exames-by-id/:id", (req, res) => {
    const examController = new ExamsController()
    res.send(examController.finById(req.params.id))
    
}); 

server.post("/cria-cliente", (req, res) => {
    const clientController = new ClientController("urlDataBase","usernameDataBase","passDataBase")    
    clientController.createClient(req.body)
    res.send("criado")
    
}); 


server.get("/get-cliente", (req, res) => {
    const clientController = new ClientController("urlDataBase","usernameDataBase","passDataBase")
    res.send(clientController.getAll())
    
}); 

server.listen(3000, () => {});
