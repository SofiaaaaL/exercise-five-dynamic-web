const express = require("express");
const router = express.Router();
//Initialize firestore database
const firestore = require("firebase/firestore");
//create a reference to the database
const db = firestore.getFirestore();

//define index routes
router.get("/", (req, res) => {
    //getting the collection post
    const postsQuery = firestore.getDocs(firestore.collection(db, "Posts"));
    //defining an empty array
    const postsArray = [];
    //looping the data and putting it into the array
    postsQuery
        .then((response) => {
            response.forEach((post) => {
                console.log(post.data());
                postsArray.push({ id: post.id, ...post.data() }); //... spreads out the values inside of the array; instead of having the whole array inside of the array
            });
            res.send(postsArray);
        })
        .catch((error) => {
            console.log(error);
            return res.send(error);
        });
});

module.exports = router