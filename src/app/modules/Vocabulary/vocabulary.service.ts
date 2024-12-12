import { isValidObjectId } from "mongoose";
import { IVocabulary } from "./vocabulary.interface";
import vocabularyModel from "./vocabulary.model";
import AppError from "../../errors/AppError";
import lessonModel from "../Lesson/lesson.model";

const createVocabulary = async (payload: IVocabulary) => {
  const isLessonExist = await lessonModel.findOne({
    lessonNumber: payload.lessonNumber,
  });

  if (!isLessonExist) {
    throw new AppError(
      404,
      `Lesson Number ${payload.lessonNumber} does not Exist.`
    );
  }
  const result = await vocabularyModel.create(payload);
  return result;
};

//get all vocabulary
const getAllVocabulary = async (q: { lessonNumber?: number }) => {
  const { lessonNumber } = q;

  const query: { lessonNumber?: number } = {};
  if (lessonNumber) {
    query.lessonNumber = lessonNumber;
  }

  const result = await vocabularyModel.find(query);
  return result;
};

//update vocabulary
const updateVocabulary = async (
  _id: string,
  updatedDoc: Partial<IVocabulary>
) => {
  if (!Object.keys(updatedDoc).length) {
    throw new Error("Updated document cannot be empty.");
  }

  const isValid = isValidObjectId(_id);
  if (!isValid) {
    throw new AppError(406, "Invalid ObjectId");
  }

  const isAvailable = await vocabularyModel.findById(_id);

  if (!isAvailable) {
    throw new AppError(404, "Vocabulary not found");
  }

  const result = await vocabularyModel.updateOne({ _id }, { $set: updatedDoc });
  return result;
};

//delete vocabulary
const deleteVocabulary = async (id: string) => {
  const isValid = isValidObjectId(id);
  if (!isValid) {
    throw new AppError(406, "Invalid ObjectId");
  }

  const isAvailable = await vocabularyModel.findById(id);

  if (!isAvailable) {
    throw new AppError(404, "Vocabulary not found");
  }

  const result = await vocabularyModel.deleteOne({ _id: id });
  return result;
};

export const vocabularyServices = {
  createVocabulary,
  getAllVocabulary,
  updateVocabulary,
  deleteVocabulary,
};
