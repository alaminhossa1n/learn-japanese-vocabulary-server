import { NextFunction, Request, Response } from "express";
import { vocabularyServices } from "./vocabulary.service";

const createVocabulary = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await vocabularyServices.createVocabulary(req.body);
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
