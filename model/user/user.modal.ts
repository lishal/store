import mongoose from "mongoose";
import { UserSchema } from "./user.schema";
import { IUser } from '../../interface';

export const User = mongoose.model<IUser>("User", UserSchema)