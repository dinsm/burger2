// Node Dependency
var mysql = require("mysql");

// Set up Heroku Deployment
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    // Set up local MySQL connection
    connection = mysql.createConnection({
        host     : "localhost",
        port     : 3306,
        user     : "root",
        password : "", // Add your password
        database : "burgerssequelize_db" // Add your database
    });
}

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;





