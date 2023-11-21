const express = require("express");
const app = express();
const firebase = require("firebase/app");
//Port
const port = 4000;

// app.get("/", (req, res) => {
//     res.send("Hello World")
// });

//the unique project configuration info for firebaase
const firebaseConfig = {
    apiKey: "AIzaSyBX4Dg0ppUX-Dul8aQrMmM_qMNWIAbhsN8",
    authDomain: "exercise-five-fall-2023-sl.firebaseapp.com",
    projectId: "exercise-five-fall-2023-sl",
    storageBucket: "exercise-five-fall-2023-sl.appspot.com",
    messagingSenderId: "925125857734",
    appId: "1:925125857734:web:29d99f488c1fa01a3022c7"
};

firebase.initializeApp(firebaseConfig);

const indexRoute = require('./routes/index');

//5.define the home page route
const singlePostRoute = require('./routes/singlePost');
const createPostRoute = require('./routes/createPost');


app.use("/", indexRoute);
//6. add the singlePost route as a app.use in index.js
app.use("/singlepost", singlePostRoute);
app.use("/createpost", createPostRoute);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});