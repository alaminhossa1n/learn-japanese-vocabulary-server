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

export const userController = {
  createUser,
};
