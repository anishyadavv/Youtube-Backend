import { Router } from "express";
import { registerUser } from "../controllers/users.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route(
  "/register",
  upload.fields([
    {
      name: "avatar",
    },
    {
      name: "coverImage",
    },
  ]),
  registerUser
);

export default router;
