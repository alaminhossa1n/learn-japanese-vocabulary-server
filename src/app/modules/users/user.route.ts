import { Router } from "express";
import { userController } from "./user.controller";
import auth from "../../middlewares/auth";
import authenticateToken from "../../middlewares/checkToken";

const router = Router();

router.post("/sign-up", userController.createUser);
router.post("/sign-in", userController.loginUser);
router.get("/get-all-user", auth("Admin"), userController.getAllUser);
router.patch("/updateRole", auth("Admin"), userController.updateUserRole);

router.get("/me", authenticateToken(), userController.checkUser);

export const userRoute = router;
