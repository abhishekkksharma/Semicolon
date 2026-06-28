import { Router } from "express";
const {handleGetDepartments} = require("../controllers/departments")

const router = Router();
console.log(handleGetDepartments);

router.get("/",handleGetDepartments);
// router.post("/")


export default router;