var mysql = require("mysql");

var connection = mysql.createConnection(({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "burgers_db"
}));

connection.connect();

connection.query("SELECT * FROM burgers", function(err, res, fields) {
    if (err) throw err;
    console.log(res);
});

connection.end();