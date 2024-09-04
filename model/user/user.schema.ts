import mongoose from "mongoose";

const { Schema } = mongoose;

export const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, "please provide username"],
            unique: [true, "username already taken"]
        },
        email: {
            type: String,
            required: [true, "please provide email"],
            unique: [true, "email already taken"]
        },
        password: {
            type: String,
            required: [true, "please provide password"],
        },
    },
    {
        timestamps: true,
    }
);