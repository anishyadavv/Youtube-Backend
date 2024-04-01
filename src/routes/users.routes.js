import { Router } from "express";
import { registerUser } from "../controllers/users.controllers.js";


const router = Router();


router.route("/register", registerUser);


export default router;