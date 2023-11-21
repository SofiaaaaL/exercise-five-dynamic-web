// create single post

//1. import express
const express = require("express");
//2. define a router
const router = express.Router();
//3. initialize firestore
const firestore = require("firebase/firestore");
//4. create a reference to the database
const db = firestore.getFirestore();

//7. get a post id from the 'req' paramters
router.get("/:id", (req, res) => {
    const postId = req.params.id;
    // res.send("PostId: " + postId);
//8. get reference to firestore collection with postid as a argumenet
    const postQuery = firestore.getDoc(firestore.doc(db, "Posts", postId));

    postQuery
        .then((response) => {
            res.send(response.data());
        })
        .catch((error) => {
            res.send(error);
        });

});

module.exports = router;