import { Response } from "express";
import { HttpStatus } from "../constant";

export const created = <T>(res: Response, data: T) => {
    return res.status(HttpStatus.CREATED).json({
        success: true,
        data: data,
    });
};
