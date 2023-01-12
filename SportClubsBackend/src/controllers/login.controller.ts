const passport = require('passport')
const LocalStrategy = require('passport-local')
const crypto = require('crypto')
const { db } = require('../database/db')

passport.use(new LocalStrategy(function verify(username, password, cb) {
  db.get('SELECT * FROM users WHERE username = ?', [username], function (err, row) {
    if (err) { return cb(err); }
    if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }

    crypto.pbkdf2(password, row.salt, 310000, 32, 'sha256', function (err, hashedPassword) {
      if (err) { return cb(err); }
      if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
        return cb(null, false, { message: 'Incorrect username or password.' });
      }
      return cb(null, row);
    });
  });
}));

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

export const loginController = passport

/* export const loginController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.body) {
      console.log(req.body)
      const username = req.body.username || 'test';
      const password = req.body.password || 'test';
      const result = await loginService(username, password)
      res.send(result)
    } else {
      res.send('No credentials provided')
    }
    // other service call (or same service, different function can go here)
    //res.sendStatus(201)
    next()
  } catch(e: any) {
    console.log(e.message)
    res.sendStatus(500) && next(e)
  }
}*/