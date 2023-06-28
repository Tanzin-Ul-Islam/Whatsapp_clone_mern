import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { pusher } from '../pusher-config/pusher.config.js'
dotenv.config();
const Connetction = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Db connection created successfully!!");
    } catch (error) {
        console.log("Error while connection to database!!Error:" + error);
    }
}

const watchCollection = () => {
    const db = mongoose.connection;
    db.once("open", () => {
        const msgCollection = db.collection("messages");
        const changeStream = msgCollection.watch();
        changeStream.on("change", (change) => {
            if (change.operationType == "insert") {
                const messageDetails = change.fullDocument;
                pusher.trigger("messages", "inserted", messageDetails);
            } else {
                console.log("Error triggering pusher!");
            }
        })
    })
}



export { Connetction, watchCollection };


