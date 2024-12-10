import { NextFunction, Request, Response } from "express";
import { vocabularyServices } from "./vocabulary.service";
import lessonModel from "../Lesson/lesson.model";

const createVocabulary = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await vocabularyServices.createVocabulary(req.body);
    const { lessonNumber } = result;

    await lessonModel.updateOne(
      { lessonNumber },
      { $inc: { vocabularyCount: 1 } }
    );

    res.status(201).json({
      success: true,
      message: "Vocabulary Created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const vocabularyController = {
  createVocabulary,
};
