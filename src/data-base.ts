var clients = []
export class DataBase{
    private url;
    private username;
    private pass;
    
    constructor(url, username,pass){
        this.url = url
        this.username = username
        this.pass = pass
        
        
    }

    public createNewConnection(){
        if(this.url && this.pass && this.username){
            return {
                client:{
                    save:(entity)=>{
                        clients.push(entity)
                    },
                    deleteById:(id)=>{
                       clients = clients.filter(item=>{item.id != id})  
                    },
                    findAll:()=>{
                        return clients
                    }
                }
            }
        }
        throw new Error("Invalid Parameters")
    }


}