const mysql = require('mysql')

export const connection = mysql.createConnection({
  host: process.env.NEXT_PUBLIC_MYSQL_HOST,
  port: '3306',
  user: process.env.NEXT_PUBLIC_MYSQL_USER,
  password: process.env.NEXT_PUBLIC_MYSQL_PASSWORD,
  database:'platservice_new'
})

// export const connection = mysql.createConnection({
//   host: "192.168.1.39",
//   port: '33060',
//   user: "root",
//   password: "1qaz2wsx",
//   database:'messkc_new2'
// })

