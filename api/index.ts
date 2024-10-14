import express, { Request, Response } from "express";
import connectDB from "../src/config/database";
import authRoutes from "../src/routes/auth.routes";
import userRoutes from "../src/routes/user.routes";
import planRoutes from "../src/routes/plan.routes";
import exerciseRoutes from "../src/routes/exercise.routes";
import routineRoutes from "../src/routes/routine.routes";
import path from "path";
import cors from 'cors';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

//Auth
app.use("/api/auth", authRoutes);

//User
app.use("/api/user", userRoutes);

//Plans
app.use("/api/plans", planRoutes);

//Exercises
app.use("/api/exercises", exerciseRoutes);

//Routines
app.use("/api/routines", routineRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
