import { Router } from "express";
import {
  getUserProfile,
  uploadProfilePhoto,
} from "../controllers/user.controller";
import { verifyToken } from "../middleware/auth.middleware";
import { upload } from "../middleware/upload.middleware";

const router = Router();

router.get("/profile", verifyToken, getUserProfile);
router.put(
  "/profile/photo",
  verifyToken,
  upload.single("profilePhoto"),
  uploadProfilePhoto
);

export default router;
