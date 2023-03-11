import { isAuthenticated } from "../middlewares";
import { createBankAccount, getBankUser } from "../controllers/bank";
import express from "express";

export default (router: express.Router) => {
  router.post("/Bank/addCard", isAuthenticated, createBankAccount);
  router.get("/Bank/getAll", isAuthenticated, getBankUser);
};
