import { Router } from "express";
import { getAllUSers, userLogin, userSignup, verifyUser, userLogout } from "../controllers/user-controller.js";
import { loginValidator, signupValidator, validate } from "../utils/validators.js";
import { verifyToken } from "../utils/token-manager.js";

const userRouter = Router();

userRouter.get("/", getAllUSers);
userRouter.post("/signup", validate(signupValidator), userSignup);
userRouter.post("/login", validate(loginValidator), userLogin);
userRouter.get("/auth-status", verifyToken, verifyUser)
userRouter.get("/logout", verifyToken, userLogout)

export default userRouter;