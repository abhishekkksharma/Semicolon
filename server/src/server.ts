const dotenv = require("dotenv");
const app = require("./app");
const { connectToMongoDB } = require("./connectMongo");


dotenv.config();

const PORT = Number(process.env.PORT);
const MONGODB_URL:string = process.env.MONGODB_URL as string;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

connectToMongoDB(MONGODB_URL).then(() => {
  console.log("MongoDB connected!");
});

export {};