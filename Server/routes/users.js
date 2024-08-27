import express from "express";
import { getUser } from "../controller/users.js";
const router = express.Router();


router.get('/:userId',getUser);

export default router;