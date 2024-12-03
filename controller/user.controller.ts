import bcrypt from 'bcrypt';
import { User } from '../model'
import { created, handleError, notFoundError, succeeded, validationError } from '../response';
import { Response, Request } from "express";
import jwt from "jsonwebtoken";


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

        if (user && (await bcrypt.compare(password, user.password))) {
            const accessToken = jwt.sign(
                {
                    user: {
                        username: user.username,
                        email: user.email,
                        id: user.id
                    }
                },
                process.env.ACCESS_TOKEN_STRING,
                { expiresIn: "15m" }
            )
            return succeeded(res, accessToken);
        }else{
            return validationError(res, "Email or password not valid");
        }

    } catch (error: unknown) {
        return handleError(res, error);
    }
}

/**
@description get current user
@route POST /user/current
@access public
*/
export const getCurrentUser = async(req, res) =>{
    try{
        return succeeded(res, req.user);
    }catch(error){
        return validationError(res, res.message)
    }
}