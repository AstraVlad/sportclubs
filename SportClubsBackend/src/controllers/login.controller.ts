import passport from 'passport';
import LocalStrategy from 'passport-local';
import crypto from 'crypto';
import {db} from '../database/db';

passport.use(new LocalStrategy(function verify(username: String, password: any, cb: CallableFunction) {
  
  db.get('SELECT * FROM users WHERE username = ?', [username], function (err: Error, row: any) {
    if (err) { return cb(err); }
    if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }

    crypto.pbkdf2(password, row.salt, 310000, 32, 'sha256', function (err: Error | null, hashedPassword: any) {
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

export const loginController = passport