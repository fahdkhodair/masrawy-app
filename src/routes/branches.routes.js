import * as branchesService from '../services/branches.services.js'
import { Router } from 'express'
const router = Router()
router.post("/add", branchesService.createBranch)
export default router;