import express from "express";

import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/users";
import { isAuthenticated } from "../middlewares";

export default (router: express.Router) => {
  router.get("/users", isAuthenticated, getAllUsers);
  router.delete("/users/:id", isAuthenticated, deleteUser);
  router.delete("/users/:id", isAuthenticated, deleteUser);
  router.patch("/users/:id", isAuthenticated, updateUser);
  router.get("/users/getUser", isAuthenticated, getUser);
};
