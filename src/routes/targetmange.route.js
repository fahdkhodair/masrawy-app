import { Router } from "express";
import * as targetManageService from "../services/targetmange.services.js";
const router = Router();
router.post("/", targetManageService.saveTarget);
router.get("/", targetManageService.getDetails);
router.get("/:id", targetManageService.getSummary);
export default router;