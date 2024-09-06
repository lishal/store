import { Router } from "express";
import {
    registerUser,
    loginUser
} from "../controller";

const router = Router();

router.post("/register-user", registerUser);
router.post("/login", loginUser);

export default router;
