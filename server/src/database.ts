import mysql from 'promise-mysql' //datos de la librería
import keys from './keys'
const pool = mysql.createPool(keys.database);
pool.getConnection().then(connection =>{
    pool.releaseConnection(connection)
    console.log("Base de datos conectada")
})
export default pool