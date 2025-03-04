// import express from 'express';

// const app= express();

// const PORT=8000;
// app.listen(PORT,()=>console.log(`server ff ${PORT}`));



 import express from 'express';
 import dotenv from 'dotenv';
 import cors from 'cors';
 import bodyParser from 'body-parser';

//components
import Connection from './database/db.js';
import Router from './routes/route.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);


const PORT = 8000;
// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD;



 app.listen(PORT, () => console.log(`Server is running successfully on PORt  ${PORT}`));

 Connection();
