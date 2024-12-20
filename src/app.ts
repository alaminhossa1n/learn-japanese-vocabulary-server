import express, { Request, Response, Application, NextFunction } from "express";
import cors from "cors";
import { userRoute } from "./app/modules/users/user.route";
import { lessonRoute } from "./app/modules/Lesson/lesson.route";
import { vocabularyRoute } from "./app/modules/Vocabulary/vocabulary.route";
import { tutorialRoute } from "./app/modules/YouTubeTutorial/youTubeTutorial.route";

const app: Application = express();

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://learn-japanese-vocabulary.netlify.app",
  ],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Mr. Developer!");
});

//routes
app.use("/api/user", userRoute);

//lessons
app.use("/api/lesson", lessonRoute);

//vocabulary
app.use("/api/vocabulary", vocabularyRoute);

// Tutorial
app.use("/api/tutorial", tutorialRoute);

//global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

export default app;
