import { Router } from "express";

const { handleGetDepartments } = require("../controllers/departments");

const router = Router();

router.get("/", handleGetDepartments);

module.exports = router;