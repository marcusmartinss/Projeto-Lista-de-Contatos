import mongoose from "mongoose";

function connectToDatabase(){
    process.env.DATABASE_URL,
    {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
    }

      
  

}

module.exports = connectToDatabase;

/*
routes.tsx
import { request } from "http";

const express = require("express");
const routes = express.Router();
away.mongoose.connect("mongodb+srv://PTOrcFinal:grupo3orc@cluster0.kinwfur.mongodb.net/?retryWrites=true&w=majority");
routes.get("/", (request, response) => response.send(""));

module.exports = routes;
  //mongoose.connect(

    
  );*/
  /*
  const db = mongoose.connection;
  db.on("error", (error: any) => console.error(error));
  db.once("open", () => console.log("Connected to the database!"));
  */