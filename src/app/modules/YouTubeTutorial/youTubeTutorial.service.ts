import { isValidObjectId } from "mongoose";
import { ITutorial } from "./youTubeTutorial.interface";
import tutorialModel from "./youTubeTutorial.model";
import AppError from "../../errors/AppError";

const createTutorial = async (payload: ITutorial) => {
  const result = await tutorialModel.create(payload);
  return result;
};

const getALlTutorials = async () => {
  const result = await tutorialModel.find();
  return result;
};

//delete video
const deleteTutorial = async (id: string) => {
  const isValid = isValidObjectId(id);
  if (!isValid) {
    throw new AppError(406, "Invalid ObjectId");
  }

  const isAvailable = await tutorialModel.findById(id);

  if (!isAvailable) {
    throw new AppError(404, "Vocabulary not found");
  }

  const result = await tutorialModel.deleteOne({ _id: id });
  return result;
};

export const tutorialServices = {
  createTutorial,
  getALlTutorials,
  deleteTutorial,
};
