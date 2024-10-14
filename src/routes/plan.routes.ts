import { Router } from "express";
import {
  createPlan,
  getPlans,
  getPlanById,
  updatePlan,
  deletePlan,
  getUserPlan,
} from "../controllers/plan.controller";
import { verifyToken } from "../middleware/auth.middleware";

const router = Router();

router.get("/my-plan", verifyToken, getUserPlan);
router.post("/", verifyToken, createPlan);
router.get("/", verifyToken, getPlans);
router.get("/:id", verifyToken, getPlanById);
router.put("/:id", verifyToken, updatePlan);
router.delete("/:id", verifyToken, deletePlan);

export default router;
