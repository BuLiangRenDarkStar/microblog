var pool = require('./db')

function User(user) {
    this.username = user.username;
    this.userpwd = user.userpwd;
}

User.prototype.userSave = function save(callback){
    var user = {
        username : this.username,
        userpwd : this.userpwd
    };
    var INSERT_USER= "INSERT INTO USERINFO (USERID,USERNAME,USERPWD) VALUES (0,?,?)";
    pool.getConnection(function(err,connection){
        connection.query(INSERT_User,[user.username,user.userpwd],function(err,result){
            if(err){
                console.log("INSERT_USER Error: " + err.message);
                return;
            }
            connection.release();
            callback(err,result);
        });
    });
};


//根据用户名得到用户数量
User.prototype.userNum = function(username, callback) {
    pool.getConnection(function(err,connection){
        console.log("getConnection");
        console.log("getUserNumByName");
        var SELECT_NUM = "SELECT COUNT(1) AS num FROM USERINFO WHERE USERNAME = ?";
        connection.query(QUERY_Num, [username], function (err, result) {
            if (err) {
                console.log("SELECT_NUM Error: " + err.message);
                return;
            }
            connection.release();
            callback(err,result);
        });
    });
};

User.prototype.userInfo = function(callback){
    var user = {
        username : this.username,
        userpwd : this.userpwd
    };
    var SELECT_LOGIN ="SELECT * FROM USERINFO WHERE USERNAME = ?";
    pool.getConnection(function(err,connection){
        connection.query(QUERY_LOGIN,[user.username],function(err,result){
            if (err) {
                console.log("SELECT_LOGIN Error: " + err.message);
                return;
            }
            connection.release();
            callback(err,result);
        });
    });
}
module.exports = User;