const express = require("express");
require('dotenv').config();
const app = express();
const pages = require("./routers/page");
const api = require("./routers/")
const cors = require('cors');
const port = process.env.PORT || 3000;
app.use(cors());

app.use("/",pages);
app.use("/api",api);

app.listen(port,() => {
    console.log(`App is running on ${port} port `);
});