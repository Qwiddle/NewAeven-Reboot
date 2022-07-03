import express from "express";
import { register, login } from './controllers/auth';

const router = express.Router();

//account
router.post("/register", register);
router.post("/login", login);

export { router };