import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();

router.post("/sign-up", userController.createUser);
router.post("/sign-in", userController.loginUser);
router.patch("/updateRole", userController.updateUserRole);

export const userRoute = router;
