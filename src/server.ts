import express, { request, response } from 'express';
import swaggerUi from "swagger-ui-express"

import swaggerfile from '../swagger.json'

import { router } from './routes';

const app = express();

app.use(express.json())


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerfile))

app.use(router);

app.listen(3333, ()=> console.log ("Server is Running"));

