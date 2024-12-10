import { model, Schema } from "mongoose";
import { ITutorial } from "./youTubeTutorial.interface";

const tutorialSchema = new Schema<ITutorial>(
  {
    title: { type: String, required: true },
    videoUrl: { type: String, required: true },
    description: { type: String },
    adminEmail: { type: String, required: true },
  },
  { timestamps: true }
);
const tutorialModel = model<ITutorial>("Tutorial", tutorialSchema);

export default tutorialModel;
