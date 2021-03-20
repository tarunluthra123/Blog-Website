const route = require("express").Router();

route.use("/blog", require("./blog"));
route.use("/show", require("./show"));

exports = module.exports = { route };
