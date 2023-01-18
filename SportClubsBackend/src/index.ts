import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import apiRouter from './routes/api.routes';
import { dbPath, db, initDB } from './database/db';
import session from 'express-session';
import passport from 'passport';

dotenv.config();
const port = process.env.PORT;

const app: Express = express();

const SQLiteStore = require('connect-sqlite3')(session);

db.serialize(initDB(process.env.ADMINUSERNAME, process.env.ADMINPASSWORD) as (() => void) | undefined)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SECRET as string | string[],
  resave: false,
  name: 'session',
  saveUninitialized: false,
  store: new SQLiteStore({ db: 'sessions.db', dir: dbPath }),
}));

app.use(passport.initialize());
app.use(passport.authenticate('session'));

const router = express.Router();


app.use('/', router)

//Requests to API go here
app.use('/api', apiRouter);

//Catching all other routes and delivering root payload
app.get('/*', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server, v2');
});

app.listen(port, () => {
  console.log(`[server]: Server made with TS is running at http://localhost:${port}`);
});