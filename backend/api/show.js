const router = require("express").Router();
const Blogs = require("../mongo");

router.get("/", (req, res) => {
    Blogs.findById(req.query.id, (blog, error) => {
        if (error) {
            console.log("Error", error);
            res.send(error);
        } else {
            console.log({ blog });
            res.send(blog);
        }
    });
});

exports = module.exports = router;
