import { Response } from 'express';
import { validationError } from '../response';

export const handleError = (res: Response, error: unknown) => {
    if (error instanceof Error) {
        return validationError(res, error.message);
    }
    return validationError(res, 'An unknown error occurred');
};
