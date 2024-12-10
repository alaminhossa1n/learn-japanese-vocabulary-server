import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userServices.createUser(req.body);
    const { password, ...userWithoutPassword } = result.toObject();

    res.status(201).json({
      success: true,
      message: "User Created successfully",
      data: userWithoutPassword,
    });
  } catch (error) {
    next(error);
  }
};

//login
const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userServices.loginUser(req.body);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User login successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const userController = {
  createUser,
  loginUser,
};
