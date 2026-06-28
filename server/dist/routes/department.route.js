"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { handleGetDepartments } = require("../controllers/departments");
const router = (0, express_1.Router)();
router.post("/", handleGetDepartments);
exports.default = router;
//# sourceMappingURL=department.route.js.map