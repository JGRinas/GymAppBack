import express, { Request, Response } from "express";
import connectDB from "./config/database";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import planRoutes from "./routes/plan.routes";
import exerciseRoutes from "./routes/exercise.routes";
import routineRoutes from "./routes/routine.routes";
import path from "path";

const app = express();
const PORT = process.env.PORT ?? 3000;

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
