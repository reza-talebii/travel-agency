import express from "express";

import { login, register } from "../controllers/Identity";

export default (router: express.Router) => {
  router.post("/Identity/register", register);
  router.post("/Identity/login", login);
};
