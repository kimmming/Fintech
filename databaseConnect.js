var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '060712ko!',
  database : 'fintect'
});
 
connection.connect();
 
connection.query('SELECT * FROM fintect.user;', function (error, results, fields) {
    console.log(results);
});

connection.end();