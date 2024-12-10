import { NextFunction, Request, Response } from "express";
import { lessonServices } from "./lesson.service";

const createLesson = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await lessonServices.createLesson(req.body);
    res.status(201).json({
      success: true,
      message: "Lesson Created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//get all lesson
const getAllLesson = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await lessonServices.getAllLesson();
    res.status(200).json({
      success: true,
      message: "Lesson retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//update lesson
const updateLesson = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { _id, updatedDoc } = req.body;
    const result = await lessonServices.updateLesson(_id, updatedDoc);
    res.status(200).json({
      success: true,
      message: "Lesson updated successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//delete lesson
const deleteLesson = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await lessonServices.deleteLesson(id);
    res.status(200).json({
      success: true,
      message: "Lesson deleted successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const lessonController = {
  createLesson,
  getAllLesson,
  updateLesson,
  deleteLesson,
};
