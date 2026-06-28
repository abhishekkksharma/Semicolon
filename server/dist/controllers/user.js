"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
async function handleUserSignup(req, res) {
    try {
        const { name, email, password, department, departmentCode, currentYear } = req.body;
        if (!name ||
            !email ||
            !password ||
            !department ||
            !departmentCode ||
            !currentYear) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields",
            });
        }
        if (!email.endsWith("@chitkara.edu.in")) {
            return res.status(400).json({
                success: false,
                message: "Please use your college email ID (@chitkara.edu.in)",
            });
        }
        const existingUser = await user_model_1.default.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists",
            });
        }
        const user = await user_model_1.default.create({
            name,
            email,
            password,
            department,
            departmentCode,
            currentYear,
            credits: 0,
            isAdmin: false,
        });
        return res.status(201).json({
            success: true,
            message: "Signup successful",
            user,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}
module.exports = {
    handleUserSignup,
};
//# sourceMappingURL=user.js.map