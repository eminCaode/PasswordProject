import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname=dirname(fileURLToPath(import.meta.url));
var app= express();
var port=3000;
var password="Tacan";

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/check",(req,res)=>{
    if(req.body["password"]===password){
        res.sendFile(__dirname+"/public/secret.html")
    } 
    else{
        res.sendFile(__dirname+"/public/index.html");
    }
})


app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})

app.listen(port,()=>{
    console.log("Server running on "+port+".");
})

