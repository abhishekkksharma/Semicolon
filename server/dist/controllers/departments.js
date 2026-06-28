"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const departments_model_1 = __importDefault(require("../models/departments.model"));
async function handleGetDepartments(req, res) {
    try {
        const departments = await departments_model_1.default.find();
        return res.status(200).json(departments);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Failed to fetch departments",
        });
    }
}
exports.default = {
    handleGetDepartments
};
//# sourceMappingURL=departments.js.map