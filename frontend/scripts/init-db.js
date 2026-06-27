const fs = require('fs');
const Database = require('better-sqlite3');

// 데이터베이스 연결 (파일이 없으면 자동 생성됨)
const db = new Database('local.db');

// SQL 파일 읽어오기
const initScript = fs.readFileSync('scripts/init-db.sql', 'utf8');

// SQL 쿼리 실행
db.exec(initScript);
console.log('✅ 데이터베이스 초기화가 성공적으로 완료되었습니다.');