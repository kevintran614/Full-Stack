///////////////////////////////////////////////////////////////////////////////////////
//          auth.routes.js: stores all of the extended logic for our routes          //
//              this way, we don't have to store everything in server.js             //
///////////////////////////////////////////////////////////////////////////////////////

import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;
