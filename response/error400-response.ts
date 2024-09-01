import { Response } from "express";

export const errorResponse400 = (res: Response, errorMessage: string) => {
  return res.status(400).json({
    success: false,
    message: errorMessage,
  });
};
