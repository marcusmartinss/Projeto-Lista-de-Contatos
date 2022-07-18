const mongoose = require("mongoose");

function connectToDatabase(){
  const link = "mongodb+srv://arthurmds:teste@cluster0.menzghb.mongodb.net/?retryWrites=true&w=majority";
  
  mongoose.connect(link).then(() => {
    console.log("Connected to database");
  }).catch(err => {
    console.log(`Error connecting to database: ${err}`);
  });
}

module.exports = {connectToDatabase};
