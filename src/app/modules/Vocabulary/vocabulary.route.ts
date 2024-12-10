import { Router } from "express";
import auth from "../../middlewares/auth";
import { vocabularyController } from "./vocabulary.controller";

const router = Router();

router.post("/create", auth("Admin"), vocabularyController.createVocabulary);
router.get(
  "/get-all-vocabulary",
  auth("Admin"),
  vocabularyController.getAllVocabulary
);
router.patch("/update", auth("Admin"), vocabularyController.updateVocabulary);

export const vocabularyRoute = router;
