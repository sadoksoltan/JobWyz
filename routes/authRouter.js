import { Router } from "express";
import { register, login, logout } from "../controllers/authController.js";
const router = Router();
import { validateRegisterInput } from "../middleware/validationMiddleware.js";
import { validateLoginInput } from "../middleware/validationMiddleware.js";

router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);
router.get("/logout", logout);
export default router;
