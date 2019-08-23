var mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE_URL,
    {useNewUrlParser: true}
);
var db = mongoose.connection;
mongoose.connection.on('connected', function () {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
  });

module.exports = mongoose;