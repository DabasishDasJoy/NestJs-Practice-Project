"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
var dynamoose_1 = require("dynamoose");
exports.UserSchema = new dynamoose_1.Schema({
    id: { type: String, hashKey: true },
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    password: { type: String },
});
