const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const api = require("./api/").route;

mongoose
    .connect("mongodb://localhost:27017/blogdb", { useNewUrlParser: true })
    .then(() => {
        console.log("DB connected");
    });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static(path.join(__dirname, "../build")));

app.use("/api", api);

app.get("/ping", function (req, res) {
    const obj = {
        1: "one",
        2: "two",
    };
    res.send(obj);
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(5000, () => {
    console.log("Server started on 5000");
});
