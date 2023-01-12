import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
const apiRouter = require('./routes/api.routes');
const {db, initDB} = require('./database/db')
const passport = require('passport')
const session = require('express-session');

const SQLiteStore = require('connect-sqlite3')(session);

dotenv.config();

const app: Express = express();

const port = process.env.PORT;
db.serialize(initDB(process.env.ADMINUSERNAME, process.env.ADMINPASSWORD))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  store: new SQLiteStore({ db: 'sessions.db', dir: '../var/db' })
}));
app.use(passport.authenticate('session'));

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