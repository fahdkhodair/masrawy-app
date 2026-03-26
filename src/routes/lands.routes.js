import * as landsService from '../services/lands.services.js'
import { Router } from 'express'
const router = Router()
router.post("/add", landsService.createLand)
export default router;