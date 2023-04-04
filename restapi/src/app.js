const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors")
const corsOptions = {
    origin:"http://localhost:3000/",
    optionsSuccessStatus:200
}
const app = express();
const port = process.env.PORT || 5000
require("./DBconnection/conn");
const studentroute = require('./Routers/studentroute');

app.use(express.json());
app.use("/students",studentroute);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions))
app.listen(port, () =>{
    console.log(`le serveur tourne au port ${port}`)
})

