const mysql = require('mysql')

export const connection = mysql.createConnection({
  host: process.env.NEXT_PUBLIC_MYSQL_HOST,
  port: '3306',
  user: process.env.NEXT_PUBLIC_MYSQL_USER,
  password: process.env.NEXT_PUBLIC_MYSQL_PASSWORD,
  database:'platservice_new'
})

