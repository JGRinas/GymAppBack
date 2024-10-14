import { Router } from "express";
import {
  createExercise,
  deleteExercise,
  getAllExercises,
} from "../controllers/exercise.controller";

const router = Router();

router.post("/", createExercise);
router.get("/", getAllExercises);
router.delete("/:id", deleteExercise);

export default router;
