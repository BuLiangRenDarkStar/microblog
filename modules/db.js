var mysql = require('mysql')

//连接数据库
var pool = mysql.createPool({
    host:'127.0.0.1',//数据库地址
    user:'root',//mysql认证用户名
    password: '123456',//mysql认证用户密码
    port:'3306',
    database:'microblogdb'
})

pool.on('connection',function (connection) {
    console.log('已连接数据库')
    pool.query('SET SESSION auto_increment_increment=1')
})

module.exports = pool;