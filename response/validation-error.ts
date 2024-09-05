import { Response } from "express";
import { HttpStatus } from "../constant";

export const validationError = (res: Response, errorMessage: string) => {
  return res.status(HttpStatus.VALIDATION_ERROR).json({
    success: false,
    message: errorMessage,
  });
};
