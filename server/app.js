import express from "express";
import dotenv from "dotenv";
import { Connetction, watchCollection } from "./db/db-connection.js";
import messageRouter from "./src/module/message/message.route.js";
import authRouter from "./src/module/auth/auth.route.js";
import userRouter from "./src/module/user/user.route.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/message', messageRouter);

app.listen(port, () => {
    console.log("Server is running on port: ", port)
})
Connetction();
watchCollection();