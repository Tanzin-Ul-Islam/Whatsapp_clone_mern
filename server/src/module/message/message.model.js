import mongoose from "mongoose";

const MessageSchema = mongoose.Schema(
    {
        message: String,
        name: String,
        recieved: Boolean
    },
    { timestamps: true }
)

export default mongoose.model('message', MessageSchema);