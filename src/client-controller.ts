import { DataBase } from "./data-base";

export class ClientController{
    private dataBase;
    constructor(url,username,pass){
        this.dataBase = new DataBase(url, username, pass)
    }
    createClient(client){  
        var conn = this.dataBase.createNewConnection()
        conn.client.save(client)
    }

    getAll(){  
        var conn = this.dataBase.createNewConnection()
        return conn.client.findAll()
    }
}