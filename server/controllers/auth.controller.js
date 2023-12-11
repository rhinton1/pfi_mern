import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const register = async (req,res,next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    try {
        await newUser.save();
        res.status(201).json('User added successfully!!');
    } catch (error) {
        next(error);
    }
};

export const login = async (req,res,next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({email});
        if (!validUser) return next(errorHandler(404, 'User not found!'));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, "Wrong credentials!"));
        const token = jwt.sign({id: validUser._id }, process.env.JWT_SECRET);    // creating a token for user _id and Secret Key
        const { password: pass, ...rest} = validUser._doc;  // deconstruct the validUser password by add ._doc because the _doc property has the password in it.   pass and rest are just generic variable names
        res
            .cookie('access_token', token, { httpOnly: true})      // creating a cookie that no other 3rd party application will have access to and will last throughout the session...."session cookie"
            .status(200)
            .json(rest)
    } catch (error) {
        next(error);
    }
};