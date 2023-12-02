import express from 'express';
import profileRouter from './routes/profile.router.js';
import authRouter from './routes/auth.router.js';
import userRouter from './routes/user.router.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB...');
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/profile', profileRouter);

app.listen(3366, () => {
    console.log('PFI is up and running op Port 3366...');
});