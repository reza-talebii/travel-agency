import express from "express";

import Identity from "./Identity";
import account from "./account";
import users from "./users";
import bank from "./bank";

const router = express.Router();

export default (): express.Router => {
  Identity(router);
  account(router);
  users(router);
  bank(router);

  return router;
};
