import { ILesson } from "./lesson.interface";
import lessonModel from "./lesson.model";

const createLesson = async (payload: ILesson) => {
  const result = await lessonModel.create(payload);
  return result;
};

const getAllLesson = async () => {
  const result = await lessonModel.find();
  return result;
};

export const lessonServices = {
  createLesson,
  getAllLesson
};
