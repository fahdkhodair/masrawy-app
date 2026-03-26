import { Router } from "express";
import * as authservice from "../services/auth.services.js";
const router = Router();
router.post("/signup",authservice.signup)
router.post("/login", authservice.login);
export default router;

