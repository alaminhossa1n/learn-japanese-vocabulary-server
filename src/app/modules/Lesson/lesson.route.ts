import { Router } from "express";
import { lessonController } from "./lesson.controller";
import auth from "../../middlewares/auth";

const router = Router();

router.post("/create", auth("Admin"), lessonController.createLesson);
router.get("/get-all-lesson", auth("Admin"), lessonController.getAllLesson);

export const lessonRoute = router;
