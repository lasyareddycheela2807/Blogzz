
import mongoose from 'mongoose'


 const Connection = async () =>{
 
    const URL=`mongodb://lasyacheela:Lasya%402005@ac-mkhkb6v-shard-00-00.nu2bp5o.mongodb.net:27017,ac-mkhkb6v-shard-00-01.nu2bp5o.mongodb.net:27017,ac-mkhkb6v-shard-00-02.nu2bp5o.mongodb.net:27017/?ssl=true&replicaSet=atlas-yu8geo-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`
 try{

       await  mongoose.connect(URL)
       console.log('............connected successflly')
    }
    catch(error){
 console.log ('error with connecting to database',error);
 //db.close();
    }
}; 

export default Connection;

// Connection();