import { Router } from "express";
const {handleUserSignup} = require("../controllers/user")

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "Express server is working!"
  });
});

router.post("/user/signup",handleUserSignup)


export default router;