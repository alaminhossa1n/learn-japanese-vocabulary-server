import { NextFunction, Request, Response } from "express";
import { tutorialServices } from "./youTubeTutorial.service";

const createTutorial = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await tutorialServices.createTutorial(req.body);
    res.status(201).json({
      success: true,
      message: "Tutorial Created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//get all Tutorial
const getAllTutorial = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await tutorialServices.getALlTutorials();
    res.status(200).json({
      success: true,
      message: "Tutorials retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const tutorialController = {
  createTutorial,
  getAllTutorial,
};
