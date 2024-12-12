import { Router } from "express";
import { lessonController } from "./lesson.controller";
import auth from "../../middlewares/auth";

const router = Router();

router.post("/create", auth("Admin"), lessonController.createLesson);
router.get("/get-all-lesson", auth("Admin","User"), lessonController.getAllLesson);
router.patch("/update", auth("Admin"), lessonController.updateLesson);
router.delete("/delete/:id", auth("Admin"), lessonController.deleteLesson);

export const lessonRoute = router;
