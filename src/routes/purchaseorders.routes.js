import {Router} from 'express'
import { getAllOrders, searchOrders } from "../services/purchaseorders.services.js";
const router = Router()
router.get("/", getAllOrders);
router.get("/search", searchOrders)
export default router