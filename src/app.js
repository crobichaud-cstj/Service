import express from "express";

const app = express();

//TODO: Ajouter code ici

app.get("/premiere",(req,res)=>{
    res.status(200)
    res.set("Content-Type","text/plain");
    res.send("Première route avec express");
})

export default app;