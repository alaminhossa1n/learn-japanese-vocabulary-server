import { isValidObjectId } from "mongoose";
import { IVocabulary } from "./vocabulary.interface";
import vocabularyModel from "./vocabulary.model";
import AppError from "../../errors/AppError";

const createVocabulary = async (payload: IVocabulary) => {
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

export const vocabularyServices = {
  createVocabulary,
  getAllVocabulary,
  updateVocabulary,
};
