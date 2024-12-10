import { Router } from "express";
import auth from "../../middlewares/auth";
import { tutorialController } from "./youTubeTutorial.controller";

const router = Router();

router.post("/create", auth("Admin"), tutorialController.createTutorial);

export const tutorialRoute = router;
