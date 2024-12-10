import { model, Schema } from "mongoose";
import { IVocabulary } from "./vocabulary.interface";

const vocabularySchema = new Schema<IVocabulary>(
  {
    word: { type: String, required: true },
    pronunciation: { type: String, required: true },
    meaning: { type: String, required: true },
    whenToSay: { type: String, required: true },
    lessonNumber: { type: Number, required: true },
    adminEmail: { type: String, required: true },
  },
  { timestamps: true }
);

const vocabularyModel = model<IVocabulary>("Vocabulary", vocabularySchema);
export default vocabularyModel;
