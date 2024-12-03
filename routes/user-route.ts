import { Router } from "express";
import {
    registerUser,
    loginUser,
    getCurrentUser
} from "../controller";
import { validateToken } from "../middleware";

const router = Router();

router.post("/register-user", registerUser);
router.post("/login", loginUser);
router.route('/current').get(validateToken, getCurrentUser);

export default router;
