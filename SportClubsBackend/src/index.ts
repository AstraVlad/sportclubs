import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
const router = require('./routes/login');

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server, v2');
});

app.use('/login', router);

app.listen(port, () => {
  console.log(`[server]: Server made with TS is running at http://localhost:${port}`);
});