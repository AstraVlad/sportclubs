import express, {Express, NextFunction, Request, Response} from 'express';
import dotenv from 'dotenv';
import { UserInfo } from 'os';
import { Hash } from 'crypto';
const apiRouter = require('./routes/api.routes');
const {db, initDB} = require('./database/db')
const session = require('express-session');

const passport = require('passport')
const LocalStrategy = require('passport-local')
const crypto = require('crypto')

const router = express.Router();

passport.use(new LocalStrategy(function verify(username: String, password: String, cb: CallableFunction) {
  db.get('SELECT * FROM users WHERE username = ?', [username], function (err: Error, row: any) {
    if (err) { return cb(err); }
    if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }

    crypto.pbkdf2(password, row.salt, 310000, 32, 'sha256', function (err: Error, hashedPassword: any) {
      if (err) { return cb(err); }
      if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
        return cb(null, false, { message: 'Incorrect username or password.' });
      }
      return cb(null, row);
    });
  });
}));

passport.serializeUser(function(user: any, cb: CallableFunction) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(function(user: any, cb: CallableFunction) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

const SQLiteStore = require('connect-sqlite3')(session);

dotenv.config();

const app: Express = express();

const port = process.env.PORT;
db.serialize(initDB(process.env.ADMINUSERNAME, process.env.ADMINPASSWORD))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SECRET,
  name: 'session',
  resave: false,
  saveUninitialized: false,
  store: new SQLiteStore({ db: 'sessions.db', dir: '../var/db' }),
  cookie: { secure: true }
}));

app.use(passport.initialize());
app.use(passport.authenticate('session'));


app.use('/', router)

//Login route, on success refirect to the root
router.post('/login', passport.authenticate('local', {
  //successReturnToOrRedirect: '/',
  successReturnToOrRedirect: '/success',
  //failureRedirect: '/api/login',
  failureRedirect: '/failure',
  failureMessage: true
}))

router.post('/login/forgot', (req: Request, res: Response) => {
  return res.status(200).send("A message with further instructions has been sent to the mail {HERE WE USE EMAIL FIELD} ")
}
)

//Logout route, on success redirect to the root
router.post('/logout', function(req: Request, res: Response, next: NextFunction) {
  req.logout(function(err: Error) {
    if (err) { return next(err); }
  });
  res.redirect('/')
});

//Password recovery root, not implemented


//Requests to API go here
app.use('/api', apiRouter);

//Dummy route for testing purposes
app.get('/success', passport.authenticate('session'), (req: Request, res: Response) => {
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