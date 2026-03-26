import { Router } from "express";
import * as salesService from "../services/sales.services.js";
const router = Router();
router.post("/", salesService.createSale);  
router.get("/", salesService.getSales);
router.delete("/:id", salesService.deleteSale);
export default router;