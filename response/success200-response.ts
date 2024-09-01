import { Response } from "express";

export const successResponse200 = <T>(res: Response, data: T) => {
  return res.status(200).json({
    success: true,
    data: data,
  });
};
