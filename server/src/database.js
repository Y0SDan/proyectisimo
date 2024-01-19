const { Pool } = require('pg');

const pool = new Pool({
    user: 'rica',
    host: 'dpg-clo6ipv5felc73a33d80-a.oregon-postgres.render.com',
    database: 'hifasdb',
    password: 'T4RlDkDpwYLfqDP8M4B4GAUM9XlnltyC',
    port: 5432,
    ssl: {
      rejectUnauthorized: false,
    },
  });

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Error al conectar a la base de datos', err.stack);
    } else {
      console.log('Conexión a la base de datos exitosa', res.rows[0]);
    }
  });

module.exports = pool;