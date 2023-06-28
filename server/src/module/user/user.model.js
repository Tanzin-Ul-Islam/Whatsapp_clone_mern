import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
            default:""
        },
        profilePic: {
            type: String,
            default: ""
        },
    },
    { timestamps: true }
)

export default mongoose.model('user', UserSchema);