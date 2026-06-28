import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import departmentRoutes from "./routes/department.route"

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Server running..")
});

app.use("/api/user", userRoutes);
app.use("/api/department", departmentRoutes);


export default app;