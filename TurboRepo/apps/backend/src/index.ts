import express from "express";
const app = express();
import { BACKEND_URL } from "@repo/common/config";

console.log(BACKEND_URL);
app.use("/",(req,res) => {
    res.json({
        msg: "Hello from Backend express"
    })
})

app.listen(3000);