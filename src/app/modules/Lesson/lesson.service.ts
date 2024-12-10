import { ILesson } from "./lesson.interface";
import lessonModel from "./lesson.model";

const createLesson = async (payload: ILesson) => {
  const result = await lessonModel.create(payload);
  return result;
};

//get all lesson
const getAllLesson = async () => {
  const result = await lessonModel.find();
  return result;
};

//update lesson
const updateLesson = async (_id: string, updatedDoc: Partial<ILesson>) => {
  if (!Object.keys(updatedDoc).length) {
    throw new Error("Updated document cannot be empty.");
  }

  const result = await lessonModel.updateOne({ _id }, { $set: updatedDoc });
  return result;
};

//delete lesson
const deleteLesson = async (id: string) => {
  const result = await lessonModel.deleteOne({ _id: id });
  return result;
};

export const lessonServices = {
  createLesson,
  getAllLesson,
  updateLesson,
  deleteLesson,
};
