import { Router } from "express";
const { handleAddNewSubject,handleGetSubjects } = require("../controllers/subject");

const router = Router();

router.post("/", handleAddNewSubject);
router.get("/:departmentCode", handleGetSubjects);

module.exports = router;