import { isValidObjectId } from "mongoose";
import config from "../../config";
import AppError from "../../errors/AppError";
import { IUser } from "./user.interface";
import userModel from "./user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// user create
const createUser = async (payload: IUser) => {
  const isUserExist = await userModel.findOne({ email: payload.email });

  if (isUserExist) {
    throw new AppError(409, "User Already Exist");
  }
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

//update role
const updateUserRole = async (_id: string, role: string) => {
  const isValid = isValidObjectId(_id);
  if (!isValid) {
    throw new AppError(406, "Invalid ObjectId");
  }

  const isAvailable = await userModel.findById(_id);

  if (!isAvailable) {
    throw new AppError(404, "User not found");
  }
  const result = await userModel.updateOne({ _id }, { role: role });
  return result;
};

//get all user
const getAllUser = async () => {
  const result = await userModel.find().select("-password");
  return result;
};

//check user
const checkUser = async (id: string) => {
  const result = await userModel.findById(id).select("-password");
  if (!result) {
    throw new AppError(404, "User not found!");
  }
  return result;
};

export const userServices = {
  createUser,
  loginUser,
  updateUserRole,
  getAllUser,
  checkUser,
};
