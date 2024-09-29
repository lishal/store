import { Response } from "express";
import { HttpStatus } from "../constant";

export const notAuthorized = (res: Response, name: string) => {
    return res.status(HttpStatus.UNAUTHORIZED).json({
        success: false,
        message: `${name}`,
    });
};
