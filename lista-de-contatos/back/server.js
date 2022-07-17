const express = require("express");

const Routes = require("./routes");
const DB = require("./database");

DB.connectToDatabase();

const appExp = express();
appExp.use(express.json());
const port = 8001;

appExp.use(Routes.userRoute);

appExp.listen(port, () => {
    console.log(`Backend started at http://localhost:${port}`);
});
