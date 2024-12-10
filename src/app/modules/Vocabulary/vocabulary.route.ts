import { Router } from "express";
import auth from "../../middlewares/auth";
import { vocabularyController } from "./vocabulary.controller";

const router = Router();

router.post("/create", auth("Admin"), vocabularyController.createVocabulary);

export const vocabularyRoute = router;
