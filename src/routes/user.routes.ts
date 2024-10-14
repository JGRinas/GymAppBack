import { Router } from 'express';
import { getUserProfile, updateProfilePhoto } from '../controllers/user.controller';
import { verifyToken } from '../middleware/auth.middleware';

const router = Router();

router.get('/profile', verifyToken, getUserProfile);
router.put('/profile/photo', verifyToken, updateProfilePhoto);

export default router;
