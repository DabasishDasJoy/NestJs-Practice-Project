import { Schema } from "dynamoose";


export const UserSchema = new Schema({
    id: { type: String, hashKey: true, index: true },
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    password: { type: String },

}, {
    timestamps: true
})
