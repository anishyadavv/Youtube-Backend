import { Router } from "express";
import {
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
} from "../controllers/users.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middelware.js";

const router = Router();

router.post(
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

router.post("/login", loginUser);

//secure routes

router.post("/logout", verifyJWT, logoutUser);
router.post("/refresh-token", refreshAccessToken);
export default router;
