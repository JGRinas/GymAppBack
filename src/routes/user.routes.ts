import { Router } from "express";
import {
  getUserProfile,
  updateProfilePhoto,
} from "../controllers/user.controller";
import { verifyToken } from "../middleware/auth.middleware";
import { upload } from "../middleware/upload.middleware";

const router = Router();

router.get("/profile", verifyToken, getUserProfile);
router.put("/profile/photo", verifyToken, upload, updateProfilePhoto);

export default router;
