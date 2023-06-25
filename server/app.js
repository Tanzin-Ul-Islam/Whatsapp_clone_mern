import express from "express";
import dotenv from "dotenv";
import {Connetction} from "./db/db-connection.js";
import messageRouter from "./src/module/message/message.route.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());

app.use('/api/v1/message', messageRouter);

app.listen(port, () => {
    console.log("Server is running on port: ", port)
})
Connetction();