import dotenv from "dotenv";
import app from "./app";
import { connectToMongoDB } from "./connectMongo";

dotenv.config();

const PORT = Number(process.env.PORT);
const MONGODB_URL:string = process.env.MONGODB_URL as string;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

connectToMongoDB(MONGODB_URL).then(() => {
  console.log("MongoDB connected!");
});