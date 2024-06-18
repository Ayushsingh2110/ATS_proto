import { Router } from "express";
import authRouter from "./authRoute.js";

const route = Router();

route.use("/auth", authRouter)

export default route;