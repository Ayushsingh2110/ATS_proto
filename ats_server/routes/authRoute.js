import { Router } from "express";
import AuthControl from "../controllers/AuthControl.js";

const route = Router()

route.post("/login", AuthControl.loginUser)
route.post("/register", AuthControl.registerUser)
route.post("/logout", AuthControl.logoutUser)

export default route