import { IVocabulary } from "./vocabulary.interface";
import vocabularyModel from "./vocabulary.model";

const createVocabulary = async (payload: IVocabulary) => {
  const result = await vocabularyModel.create(payload);
  return result;
};

export const vocabularyServices = {
  createVocabulary,
};
