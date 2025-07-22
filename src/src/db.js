const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mscripto'
});

db.connect((err) => {
  if (err) {
    console.error('فشل الاتصال بقاعدة البيانات:', err);
  } else {
    console.log('✅ تم الاتصال بقاعدة البيانات');
  }
});

module.exports = db;
