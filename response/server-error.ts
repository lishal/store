import { Response } from "express";
import { HttpStatus } from "../constant";

export const serverError = (res: Response, name: string) => {
    return res.status(HttpStatus.SERVER_ERROR).json({
        success: false,
        message: `Internal server error !`,
    });
};
