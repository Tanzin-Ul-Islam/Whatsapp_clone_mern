import mongoose from "mongoose";
import user from "../user/user.model.js";
const MessageSchema = mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'user'
        },
        recieverId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'user'
        },
        message: String,
        recieved: Boolean,

    },
    { timestamps: true }
)

export default mongoose.model('message', MessageSchema);