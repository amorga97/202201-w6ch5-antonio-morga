/* eslint-disable no-console */
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import robotRouter from './routes/robots.routes';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(morgan('dev'));

app.use('/robots', robotRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
