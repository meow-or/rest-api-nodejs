const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test-rest-api'
})

connection.connect((error) => {
    if(error) {
      console.log('Ошибка подключения к базе данных!')
    } else {
      console.log('Подключение к базе данных установлено!')
    }
})

module.exports = connection