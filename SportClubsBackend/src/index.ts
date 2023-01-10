import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
const apiRouter = require('./routes/api.routes');

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server, v2');
});


app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`[server]: Server made with TS is running at http://localhost:${port}`);
});