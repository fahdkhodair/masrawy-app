import { Router } from "express";
import * as protectService from "../services/security.services.js";
const router = Router();
router.get("/", protectService.searchSecurityLogs);
export default router;