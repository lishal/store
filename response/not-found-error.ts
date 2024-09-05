import { Response } from "express";
import { HttpStatus } from "../constant";

export const notFoundError = (res: Response, name: string) => {
  return res.status(HttpStatus.NOT_FOUND).json({
    success: false,
    message: `${name} not found!`,
  });
};
