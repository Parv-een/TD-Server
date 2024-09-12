import express from 'express';
import bodyParser from 'body-parser';
import driverRouter from "./Routers/driverRouter";

const CONNECTION_STRING = "mongodb+srv://parveen:Parveen@10@cluster0.a1gsl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;"

const app = express();
app.use(bodyParser.json());

app.use("/driver", driverRouter);



app.listen(3000, () => {
    console.log("Server is running");
});