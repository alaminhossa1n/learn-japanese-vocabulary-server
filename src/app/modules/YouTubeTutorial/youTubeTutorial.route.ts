import { Router } from "express";
import auth from "../../middlewares/auth";
import { tutorialController } from "./youTubeTutorial.controller";

const router = Router();

router.post("/create", auth("Admin"), tutorialController.createTutorial);
router.get(
  "/get-all-tutorial",
  auth("Admin", "User"),
  tutorialController.getAllTutorial
);
router.delete("/delete/:id", auth("Admin"), tutorialController.deleteTutorial);

export const tutorialRoute = router;
