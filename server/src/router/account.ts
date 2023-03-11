import express from "express";

import { isAuthenticated } from "../middlewares";
import { deleteUser, getUser, updateUser } from "../controllers/Account";

export default (router: express.Router) => {
  router.delete("/Account/deleteAccount/:id", isAuthenticated, deleteUser);
  router.patch("/Account/update/:id", isAuthenticated, updateUser);
  router.get("/Account/userInfo", getUser);
};
