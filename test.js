const http = require('http');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'kwuwave4'
});

connection.connect(err => {
  if (err) {
    console.error('MySQL 연결 실패:', err);
    return;
  }
  console.log('MySQL에 성공적으로 연결됨.');
});
const express = require('express');
const app = express();

app.use(express.json()); // JSON 요청 본문을 파싱하기 위함


app.post('/save-data', function(req, res) => {
  if (req.url === '/save-data') { // 웹 페이지에서 /save-data로 요청을 보낼 경우
    // 데이터베이스에 데이터를 저장하는 쿼리 실행
    const query = "INSERT INTO testtable VALUES (123, 'test')";
    connection.query(query, (err, result) => {
      if (err) {
        console.error('데이터베이스 쿼리 실패:', err);
        res.writeHead(500);
        res.end('Server Error');
        return;
      }
      console.log('데이터 저장 성공:', result);
      res.writeHead(200);
      res.end('Data Saved');
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

const PORT = 3306;
server.listen(PORT, () => {
  console.log(`서버가 ${PORT}번 포트에서 실행 중입니다.`);
});
