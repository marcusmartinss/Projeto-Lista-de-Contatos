require('dotenv').config();
const mongoose = require("mongoose");

function connectToDatabase(){
  const link = process.env.DB_LINK;
  
  mongoose.connect(link).then(() => {
    console.log("Connected to database");
  }).catch(err => {
    console.log(`Error connecting to database: ${err}`);
  });
}

module.exports = {connectToDatabase};
