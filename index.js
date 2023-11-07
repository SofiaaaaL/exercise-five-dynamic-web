const express = require("express");
const app = express();
const port = 4000;

// app.get("/", (req, res) => {
//     res.send("Hello World")
// });

const indexRoute = require('./routes/index');
// const singlePostRoute = require('./routes/singlePost');
// const createPostRoute = require('./routes/createPost');

app.use("/", indexRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})