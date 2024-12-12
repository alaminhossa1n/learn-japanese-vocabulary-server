import { ITutorial } from "./youTubeTutorial.interface";
import tutorialModel from "./youTubeTutorial.model";

const createTutorial = async (payload: ITutorial) => {
  const result = await tutorialModel.create(payload);
  return result;
};

const getALlTutorials = async () => {
  const result = await tutorialModel.find();
  return result;
};

export const tutorialServices = {
  createTutorial,
  getALlTutorials,
};
