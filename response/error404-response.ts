import { Response } from "express";

export const errorResponse404 = (res: Response, name: string) => {
  return res.status(404).json({
    success: false,
    message: `${name} not found!`,
  });
};
