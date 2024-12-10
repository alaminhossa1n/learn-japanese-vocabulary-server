import { model, Schema } from "mongoose";
import { ILesson } from "./lesson.interface";

const lessonSchema = new Schema<ILesson>(
  {
    lessonName: { type: String, required: true },
    lessonNumber: { type: Number, unique: true, required: true },
    vocabularyCount: { type: Number, default: 0 },
    adminEmail: { type: String, required: true },
  },
  { timestamps: true }
);



const lessonModel = model<ILesson>("Lesson", lessonSchema);
export default lessonModel;
