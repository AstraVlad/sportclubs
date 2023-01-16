const sqlite3 = require('sqlite3');
const mkdirp = require('mkdirp');
const crypto = require('crypto');

const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./db/sportclubs"
  }
});


mkdirp.sync('./db');

const db = new sqlite3.Database('./db/sportclubs.db');

function initDB (adminUsername, adminPassword) 
{
  db.run("CREATE TABLE IF NOT EXISTS users ( \
    id INTEGER PRIMARY KEY, \
    username TEXT UNIQUE, \
    hashed_password BLOB, \
    salt BLOB \
  )");
  
  //console.log("1")
 
  // create an initial user
  const salt = crypto.randomBytes(16);

  db.run('INSERT OR IGNORE INTO users (username, hashed_password, salt) VALUES (?, ?, ?)', [
    adminUsername,
    crypto.pbkdf2Sync(adminPassword, salt, 310000, 32, 'sha256'),
    salt
  ]);
}


module.exports = {
  db,
  initDB
};