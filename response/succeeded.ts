import { Response } from "express";
import { HttpStatus } from "../constant";

export const succeeded = <T>(res: Response, data: T) => {
  return res.status(HttpStatus.SUCCESS).json({
    success: true,
    data: data,
  });
};
