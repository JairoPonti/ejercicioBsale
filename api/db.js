var mysql = require('mysql');
require('dotenv').config({ path: '.env'});

var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});

const conectarDB = async () => {
  try {
      await connection.connect(function(err) {
        if (err) {
          console.error('Database connection failed: ' + err.stack);
          return;
        }
      
        console.log('Connected to database.');
      });
      
      connection.end();
      
      // console.log('DB Conectada');
  } catch (error) {
      console.log(error)
      process.exit(1); // Detener la app
  }
}

module.exports = conectarDB 