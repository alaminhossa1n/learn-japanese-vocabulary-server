import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import AppError from "../errors/AppError";
import config from "../config";

const authenticateToken = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) throw new AppError(401, "Token not provided");

    jwt.verify(token, config.jwt_secret as string, (err, user) => {
      if (err) throw new AppError(403, "Invalid token");
      req.body = (user as JwtPayload)._id;
      next();
    });
  };
};

export default authenticateToken;
