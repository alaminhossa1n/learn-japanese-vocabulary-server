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

//delete tutorial
const deleteTutorial = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await tutorialServices.deleteTutorial(id);
    res.status(200).json({
      success: true,
      message: "Tutorial deleted successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const tutorialController = {
  createTutorial,
  getAllTutorial,
  deleteTutorial,
};
