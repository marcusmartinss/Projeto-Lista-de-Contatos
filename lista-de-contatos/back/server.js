const express = require("express");
const cors = require("cors")

const Routes = require("./routes");
const DB = require("./database");

DB.connectToDatabase();

const appExp = express();
appExp.use(express.json());
appExp.use(cors())
const port = 8002;

appExp.use(Routes.userRoute);

appExp.listen(port, () => {
    console.log(`Backend started at http://localhost:${port}`);
});
