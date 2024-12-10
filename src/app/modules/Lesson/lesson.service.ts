import { ILesson } from "./lesson.interface";
import lessonModel from "./lesson.model";

const createLesson = async (payload: ILesson) => {
  const result = await lessonModel.create(payload);
  return result;
};

export const lessonServices = {
  createLesson,
};
