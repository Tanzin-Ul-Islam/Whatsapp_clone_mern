import Pusher from "pusher";
import dotenv from "dotenv";
dotenv.config();

const pusher = new Pusher({
    appId: process.env.PUSHER_APPID,
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: "ap2",
    useTLS: true
});

export {pusher};
