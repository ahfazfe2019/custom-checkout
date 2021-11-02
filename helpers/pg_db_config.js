require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})
const app_main_table = process.env.DB_MAIN_TABLE_NAME || 'shopify_app_credentials';
pool.connect((err, client, release) => {
    if (err) {
      // res.status(400).json({'message':'Error while connecting database'});
      return console.error('Error acquiring client', err.stack)
    }else{
        return console.log('Connection success', client)
    }
    // client.query(`CREATE TABLE IF NOT EXISTS ${app_main_table} (id serial PRIMARY KEY,shop varchar(200) NOT NULL,token varchar(450) NOT NULL,created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,status integer NOT NULL DEFAULT '1')`, (err, result) => {
    //   release()
    //   if (err) {
    //     return console.error('Error executing query', err.stack)
    //   }
    //   // console.log(result.rows)
    // })
})
module.exports = pool;
