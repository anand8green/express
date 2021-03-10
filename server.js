const express = require("express");
const cors = require('cors');
const app = express()

app.use(cors())

// app.get("/", (req, res) => {
//     res.send("Hello World")
// })

app.use(express.static(__dirname + "/static"));

app.listen(process.env.PORT || 1000, () => {
    console.log("server running")
})