import { isAuthenticated } from "../middlewares";
import {
  createBankAccount,
  deleteBank,
  getBankUser,
} from "../controllers/bank";
import express from "express";

export default (router: express.Router) => {
  router.post("/Bank/addCard", isAuthenticated, createBankAccount);
  router.get("/Bank/getAllCards", isAuthenticated, getBankUser);
  router.delete("/Bank/:id", isAuthenticated, deleteBank);
};
