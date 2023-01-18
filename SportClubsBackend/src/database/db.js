const sqlite3 = require('sqlite3');
const {mkdirp} = require('mkdirp');
const crypto = require('crypto');
const dbPath='./db'
const dbFileName = '/sportclubs.db'

console.log("Require Knex")
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath + dbFileName
  }
});

console.log("Users query")
knex('users').select('*').then((users)=>console.log(users))


const made = mkdirp.sync(dbPath)
console.log(`Made: ${made}`)

//console.log("Making dir: " + mkdirp.sync('../var/db'));

console.log("Making DB")
const db = new sqlite3.Database(dbPath + dbFileName);

console.log("Init DB Declaration")
function initDB (adminUsername, adminPassword) 
{
  db.run("CREATE TABLE IF NOT EXISTS users ( \
    id INTEGER PRIMARY KEY, \
    username TEXT UNIQUE, \
    hashed_password BLOB, \
    salt BLOB \
  )");
  
  console.log("DB.Run Declaration")
 
  // create an initial user
  const salt = crypto.randomBytes(16);

  db.run('INSERT OR IGNORE INTO users (username, hashed_password, salt) VALUES (?, ?, ?)', [
    adminUsername,
    crypto.pbkdf2Sync(adminPassword, salt, 310000, 32, 'sha256'),
    salt
  ]);
}


module.exports = {
  dbPath,
  db,
  initDB
};