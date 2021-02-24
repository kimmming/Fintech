const express = require('express');
const app = express();

app.use(express.json());
//json타입에 데이터 전송을허용
app.use(express.urlencoded({extended:false}));
//form 타입에 데이터 전송을 허용한다

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

app.post('/userData', function(req, res){
    console.log("사용자의 요청이 발생했습니다.");
    console.log(req.body);
    res.send(true);
})
//라우터

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