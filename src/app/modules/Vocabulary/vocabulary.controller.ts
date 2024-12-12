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

//get all vocabulary
const getAllVocabulary = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const lessonNumber = req.query.lessonNumber
      ? parseInt(req.query.lessonNumber as string, 10)
      : undefined;

    const result = await vocabularyServices.getAllVocabulary({ lessonNumber });
    res.status(200).json({
      success: true,
      message: "Vocabulary retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//update vocabulary
const updateVocabulary = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { _id, updatedDoc } = req.body;
    const result = await vocabularyServices.updateVocabulary(_id, updatedDoc);
    res.status(200).json({
      success: true,
      message: "Vocabulary updated successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//delete vocabulary
const deleteVocabulary = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await vocabularyServices.deleteVocabulary(id);
    res.status(200).json({
      success: true,
      message: "Vocabulary deleted successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const vocabularyController = {
  createVocabulary,
  getAllVocabulary,
  updateVocabulary,
  deleteVocabulary,
};
