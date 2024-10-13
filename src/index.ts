import express, { Request, Response } from "express";
import connectDB from "./config/database";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

connectDB();

//Auth
app.use("/api/auth", authRoutes);

// Rutas protegidas (usuario)
app.use('/api/user', userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
