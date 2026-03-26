import {Router} from 'express'
import * as cashdaysService from '../services/cashdays.services.js'
const router = Router()
router.get("/", cashdaysService.searchCashDays)
export default router