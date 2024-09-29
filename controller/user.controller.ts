import bcrypt from 'bcrypt';
import { User } from '../model'
import { created, handleError, notFoundError, validationError } from '../response';
import { Response, Request } from "express";


/**
@description register user
@route POST /register-user
@access public
*/
export const registerUser = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return validationError(res, "All fields are required");
        }

        const isUserAvailable = await User.findOne({ email });
        if (isUserAvailable) {
            return validationError(res, "User with this email is already registered");
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({ username, email, password: hashPassword });
        if (newUser) {
            return created(res, newUser)
        }

    } catch (error: unknown) {
        return handleError(res, error);
    }
}


/**
@description login user
@route POST /login
@access public
*/
export const loginUser = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return validationError(res, "Both username and password are required");
        }

        const user = await User.findOne({ username });
        if (!user) {
            return notFoundError(res, "User with this username is not found");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return notFoundError(res, "Invalid username or password");
        }

        // TODO: create token and respond to the user

    } catch (error: unknown) {
        return handleError(res, error);
    }
}