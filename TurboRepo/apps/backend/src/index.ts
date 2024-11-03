import express from "express";
const app = express();

app.use("/",(req,res) => {
    res.json({
        msg: "Hello from Backend express"
    })
})

app.listen(3000);