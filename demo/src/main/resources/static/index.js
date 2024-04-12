const mysql = require('mysql');

// MySQL 연결 설정
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'kwuwave4'
});

// 데이터베이스 연결
connection.connect(err => {
    if (err) {
        console.error('MySQL 연결 실패:', err);
        return;
    }
    console.log('MySQL에 성공적으로 연결됨.');
});

// 데이터베이스 쿼리 예시
connection.query('SELECT 1 + 1 AS solution', (err, results, fields) => {
    if (err) throw err;
    console.log('The solution is: ', results[0].solution);
});

// 연결 종료
connection.end();
