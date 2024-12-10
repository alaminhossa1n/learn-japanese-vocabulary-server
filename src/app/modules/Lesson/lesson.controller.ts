import { NextFunction, Request, Response } from "express";
import { lessonServices } from "./lesson.service";
import userModel from "../users/user.model";
import AppError from "../../errors/AppError";

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

export const lessonController = {
  createLesson,
};
