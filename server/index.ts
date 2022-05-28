import dotenv from 'dotenv';
dotenv.config();

import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';


//Middlewareconst 
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());

//Server
const port = process.env.PORT || 5000;

//database
const db = require('./config/db')
db.connect();

//Routes
app.get('/', (req: any, res: any) => {
    res.json({ msg: 'asd' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})