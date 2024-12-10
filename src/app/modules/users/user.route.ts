import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();

router.post("/sign-up", userController.createUser);
router.post("/sign-in", userController.loginUser);

export const userRoute = router;
