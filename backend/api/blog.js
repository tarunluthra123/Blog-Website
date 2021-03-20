const router = require("express").Router();
const Blogs = require("../mongo");

router.get("/", (req, res) => {
    Blogs.find({}, (blog, error) => {
        if (error) {
            console.log("Error", error);
            res.send(error);
        } else {
            res.send(blog);
        }
    });
});

exports = module.exports = router;
