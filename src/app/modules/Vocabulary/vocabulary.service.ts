import { IVocabulary } from "./vocabulary.interface";
import vocabularyModel from "./vocabulary.model";

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

export const vocabularyServices = {
  createVocabulary,
  getAllVocabulary,
};
