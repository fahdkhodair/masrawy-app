import { Router } from "express";
import * as reportsService from "../services/reports.services.js";
const router = Router();    
router.get("/", reportsService.searchReports);
export default router;