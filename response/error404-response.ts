import { Response } from "express";

export const error404 = (res: Response, name: string) => {
  return res.status(404).json({
    success: false,
    message: `${name} not found!`,
  });
};
