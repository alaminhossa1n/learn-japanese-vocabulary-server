import { Router } from "express";
import { userController } from "./user.controller";
import auth from "../../middlewares/auth";

const router = Router();

router.post("/sign-up", userController.createUser);
router.post("/sign-in", userController.loginUser);
router.get("/get-all-user", auth("Admin"), userController.getAllUser);
router.patch("/updateRole", auth("Admin"), userController.updateUserRole);

export const userRoute = router;
