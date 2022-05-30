import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        require: [true, "Please add your name"],
        trim: true,
        unique: true
    },
    account: {
        type: String,
        required: [true, "Please add your email or phone"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please add your passwork"],
        trim: true,
    },
    avata: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    type: {
        type: String,
        default: "normal"
    }

}, {
    timestamps: true
});


export default mongoose.model("User", userSchema);