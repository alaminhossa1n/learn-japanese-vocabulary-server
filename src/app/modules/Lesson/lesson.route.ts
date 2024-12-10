import { Router } from "express";
import { lessonController } from "./lesson.controller";
import auth from "../../middlewares/auth";

const router = Router();

router.post("/create", auth("Admin"), lessonController.createLesson);

export const lessonRoute = router;
