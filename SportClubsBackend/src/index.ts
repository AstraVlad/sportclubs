import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import apiRouter from './routes/api.routes';
import { db, initDB } from './database/db';
import session from 'express-session';
import passport from 'passport';

const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;


dotenv.config();
const port = process.env.PORT;

const app: Express = express();

const SQLiteStore = require('connect-sqlite3')(session);
db.serialize(initDB(process.env.ADMINUSERNAME, process.env.ADMINPASSWORD))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SECRET as string | string[],
  resave: false,
  saveUninitialized: false,
  store: new SQLiteStore({ db: 'sessions.db', dir: '../var/db' }),
}));




app.use(passport.initialize());
app.use(passport.authenticate('session'));


const router = express.Router();


app.use('/', router)

//Requests to API go here
app.use('/api', apiRouter);

//Dummy route for testing purposes
app.get('/success', (req: Request, res: Response) => {
  res.send('Operation successful!');
});

//Dummy route for testing purposes
app.get('/failure', (req: Request, res: Response) => {
  res.send('Operation failed!');
});

//Catching all other routes and delivering root payload
app.get('/*', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server, v2');
});

app.listen(port, () => {
  console.log(`[server]: Server made with TS is running at http://localhost:${port}`);
});