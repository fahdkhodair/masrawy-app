import {Router} from "express";
import * as storeService from "../services/store.services.js";
const router = Router();
router.post("/", storeService.createStore);
export default router;