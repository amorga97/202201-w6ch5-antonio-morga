import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(morgan('dev'));

app.listen(port);
