import { Router } from "express";

const { handleGetDepartments, handleAddDepartment } = require("../controllers/departments");

const router = Router();

router.get("/", handleGetDepartments);
router.post("/", handleAddDepartment);


module.exports = router;