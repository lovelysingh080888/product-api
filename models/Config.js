
var mongoose = require ("mongoose");
try {
    var DB = mongoose.createConnection(process.env.MONGO_DB);  
} catch (error) {
    console.log(error)
}


module.exports = DB;