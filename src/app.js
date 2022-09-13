import dayjs from "dayjs";
import express from "express";
import planetsRoutes from "./routes/planets-routes.js";
import errors from "./middlewares/errors.js";

const app = express();
app.use(express.json()); //Permettre à notre serveur de comprendre le json reçu

//TODO: Ajouter code ici

app.get("/premiere", (req, res) => {
    res.status(200)
    res.set("Content-Type", "text/plain");
    res.send("Première route avec express");
})

app.get("/date", (req, res) => {
    res.status(200)
    res.set("Content-Type", "text/plain");
    const today = dayjs();
    res.send(today.format());
})

app.get("/maths/:operation", (req, res) => {
    const a = parseInt(req.query.a, 10);
    const b = parseInt(req.query.b, 10);
    const operation = req.params.operation
    res.status(200)
    res.set("Content-Type", "text/plain");

    switch (operation) {
        case "somme":
            res.send((a + b).toString());
            break;
        case "quotient":
            res.send((a / b).toString());
            break;
        case "produit":
            res.send((a * b).toString());
            break;
        case "difference":
            res.send((a - b).toString());
            break;
        default:
            res.send("Erreur");
    }


});

app.use("/planets", planetsRoutes);

app.use(errors);



export default app;