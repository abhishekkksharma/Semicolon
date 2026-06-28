"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const subjectSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    departmentCode: {
        type: String,
        required: true,
        index: true,
    },
    year: {
        type: Number,
        required: true,
        index: true,
    },
    semester: {
        type: Number,
        required: true,
    },
    subjectCode: String,
    resourceCount: {
        type: Number,
        default: 0,
    },
});
//# sourceMappingURL=subject.model.js.map