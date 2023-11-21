//create a post
const express =require("express");
const router = express.Router();
const firestore = require("firebase/firestore");
const db = firestore.getFirestore();
const submitForm = `
    <form action="/createPost/submit">

        <label>Title
            <input type="text" name="postTitle" placeholder="put title here"/>
        </label>

        <label>Text
            <input type="text" name="postText"/>
        </label>

        <label>Author
            <input type="text" name="author"/>
        </label>

        <button type="submit">Submit</button>
    
    </form>
`; //take this data and send it to 

//if they go to create they get the form
router.get("/", (req, res) => {
    res.send(submitForm);
});


//if they submit they go to this, and this is where
router.get("/submit", (req, res) => {
    const queryParams = req.query;
    const title = queryParams.postTitle;
    const text = queryParams.postText;
    const author = queryParams.author;
    const id = title.replace(/\s+/g, "-").toLowerCase(); //regular expressions code; replace space with a dashline and 

    console.log(title,text )
 
    const setBlogPost = firestore.setDoc(firestore.doc(db, "posts", id), {
        postTitle: title,
        postText: text,
        author: author,
    });

setBlogPost 
    .then(() => {
        res.send(`
            <h1>Thanks</h1>
            <p><a href="/createPost">Submit another post</a>.</p>
        `)
    })
    .catch((error) => {
        console.warn(error);
        res.send(`Errorsubmitting:${error.toString()}`);
    });
});

module.exports = router;