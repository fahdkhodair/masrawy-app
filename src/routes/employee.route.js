import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { createEmployee } from "../services/employee.services.js";

const router = Router();

router.post(
  "/add",
  upload().fields([
    { name: "idCardFront", maxCount: 1 },
    { name: "idCardBack", maxCount: 1 }
  ]),
  createEmployee
);

export default router;


