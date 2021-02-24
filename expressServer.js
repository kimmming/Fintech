const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
//뷰파일이 있는 디렉토리를 설정함
app.set('view engine', 'ejs');
//뷰엔진으로 ejs 사용한다



app.get('/', function (req, res) {
  res.send('Hello World');
})

app.get('/ejs', function (req, res) {
    res.render('ejsTest');
})

app.get('/user', function (req, res) {
    connection.query('SELECT * FROM fintect.user;', function (error, results, fields) {
        console.log(results);
        res.send(results);
    });
})


var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '060712ko!',
    database : 'fintect',
});

connection.connect();

app.listen(3000);