"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const connectMongo_1 = require("./connectMongo");
dotenv_1.default.config();
const PORT = Number(process.env.PORT);
const MONGODB_URL = process.env.MONGODB_URL;
app_1.default.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
(0, connectMongo_1.connectToMongoDB)(MONGODB_URL).then(() => {
    console.log("MongoDB connected!");
});
//# sourceMappingURL=server.js.map