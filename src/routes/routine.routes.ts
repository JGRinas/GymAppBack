import { Router } from "express";
import {
  createRoutine,
  updateRoutine,
  deleteRoutine,
  getRoutineById,
  getUserRoutines,
} from "../controllers/routine.controller";
import { verifyToken } from "../middleware/auth.middleware";

const router = Router();

router.post("/", createRoutine);
router.get("/user", verifyToken, getUserRoutines);
router.get("/:id", getRoutineById);
router.put("/:id", updateRoutine);
router.delete("/:id", deleteRoutine);

export default router;
