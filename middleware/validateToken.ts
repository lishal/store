import jwt from 'jsonwebtoken';
import { notAuthorized, validationError } from '../response';

export const validateToken = async (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_STRING, (err, decode) => {
            if (err) {
                return validationError(res, "User with this email is already registered");
            }

            req.user = decode.user;
            next();
        })

        if (!token) { return notAuthorized(res, "User is not authorized"); }
    }

}