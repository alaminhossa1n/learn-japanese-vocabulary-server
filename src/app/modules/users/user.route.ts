import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();

router.post("/sign-up", userController.createUser);

export const userRoute = router;
