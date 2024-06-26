import mongoose, { Schema, Document } from "mongoose";


export interface Message extends Document {
    content: string;
    createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export interface User extends Document {
    username: string;
    email: string;
    password: string,
    verifyCode: string,
    verifyCodeExpiry: Date,
    isVerified: Boolean,
    isAcceptingMessage: Boolean,
    messages: Message[]
}

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        // to identify a valid email
        match: [/.+\@.+\..+/, "Please provide a valid email"]
    },

    password: {
        type: String,
        required: [true, " password is required"]
    },
    verifyCode: {
        type: String,
        required: [true, " password is required"]
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, " password is required"]
    },
    isVerified: {
        type: Boolean,
        default : false
    },
    isAcceptingMessage: {
        type: Boolean,
        default : true
    },
    messages: [MessageSchema]

})

// next js is edge time framework

const UserModel = (mongoose.models.User as mongoose.Model<User> ) || mongoose.model<User>("User" , UserSchema)

export default UserModel;