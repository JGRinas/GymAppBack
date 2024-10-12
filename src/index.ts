import express, { Request, Response } from "express";
import connectDB from "./config/database";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
