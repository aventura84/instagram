const mysql = require('mysql2/promise');
const keys = require('../keys');

let pool;
const { host, port, user, password, database } = keys.database;

const getConnection = async () => {
  if (!pool) {
    pool = mysql.createPool({
      connectionLimit: 10,
      host: host,
      user: user,
      port: port,
      password: password,
      database: database,
      timezone: 'Z',
    });
  }

  return await pool.getConnection();
};

module.exports = {
  getConnection,
};
