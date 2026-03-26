import {Router} from 'express'
import * as accountReceivableService from '../services/Indebtedness.services.js'
const router = Router()
router.post("/add", accountReceivableService.create)
router.get("/", accountReceivableService.getAll)
router.delete("/:id", accountReceivableService.remove)
export default router;