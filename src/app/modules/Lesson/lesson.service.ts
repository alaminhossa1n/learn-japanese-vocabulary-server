import { isValidObjectId } from "mongoose";
import { ILesson } from "./lesson.interface";
import lessonModel from "./lesson.model";
import AppError from "../../errors/AppError";

const createLesson = async (payload: ILesson) => {
  const isExist = await lessonModel.findOne({
    lessonNumber: payload.lessonNumber,
  });

  if (isExist) {
    throw new AppError(409, `Lesson ${payload.lessonNumber} is Already Exist`);
  }
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

  const isValid = isValidObjectId(_id);
  if (!isValid) {
    throw new AppError(406, "Invalid ObjectId");
  }

  const isAvailable = await lessonModel.findById(_id);

  if (!isAvailable) {
    throw new AppError(404, "Lesson not found");
  }

  const result = await lessonModel.updateOne({ _id }, { $set: updatedDoc });
  return result;
};

//delete lesson
const deleteLesson = async (id: string) => {
  const isValid = isValidObjectId(id);
  if (!isValid) {
    throw new AppError(406, "Invalid ObjectId");
  }

  const isAvailable = await lessonModel.findById(id);

  if (!isAvailable) {
    throw new AppError(404, "lesson not found");
  }

  const result = await lessonModel.deleteOne({ _id: id });
  return result;
};

export const lessonServices = {
  createLesson,
  getAllLesson,
  updateLesson,
  deleteLesson,
};
