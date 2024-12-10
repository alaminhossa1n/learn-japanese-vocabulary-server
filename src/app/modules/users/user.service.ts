import config from "../../config";
import AppError from "../../errors/AppError";
import { IUser } from "./user.interface";
import userModel from "./user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// user create
const createUser = async (payload: IUser) => {
  const result = await userModel.create(payload);
  return result;
};

//login user
const loginUser = async (payload: { email: string; password: string }) => {
  const isUserExist = await userModel.findOne({ email: payload.email });

  if (!isUserExist) {
    throw new AppError(409, "User does not Exits");
  }

  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    isUserExist?.password
  );

  if (!isPasswordMatched) {
    throw new AppError(401, "Wrong Password");
  }

  const jwtPayload = {
    _id: isUserExist?._id,
    role: isUserExist?.role,
    email: isUserExist?.email,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_secret as string, {
    expiresIn: "7d",
  });

  return {
    user: {
      _id: isUserExist?._id,
      role: isUserExist?.role,
      email: isUserExist?.email,
    },
    token: accessToken,
  };
};

export const userServices = {
  createUser,
  loginUser,
};
