import express from "express";
require("dotenv").config();
import jwt from "jsonwebtoken";

import {
  deleteUserById,
  getUserByEmail,
  getUserById,
  getUserByToken,
} from "../db/users";
import { createBank, getUserBank } from "../db/bank";
import { getUserByJwtToken } from "../helpers/getByToken";

export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    await deleteUserById(id);

    return res.status(200).end();
  } catch (error) {
    return res.sendStatus(400);
  }
};

export const updateUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const { firstName, lastName } = req.body;

    if ([firstName, lastName].some((body) => !body)) {
      return res.sendStatus(400);
    }

    const user = await getUserById(id);

    user.firstName = firstName;
    user.lastName = lastName;
    await user.save();

    return res.status(200).end();
  } catch (error) {
    return res.sendStatus(400);
  }
};

export const getBankUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const user = await getUserByJwtToken(
      req.headers.authorization.split(" ")[1]
    );

    const banks = await getUserBank(user.id).select("+_id");

    return res.status(200).json(banks);
  } catch {
    return res
      .status(400)
      .send("An error occurred while processing the request");
  }
};

export const createBankAccount = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { iban, cardNumber } = req.body;

    if ([iban, cardNumber].some((body) => !body)) {
      return res.status(400).json({ message: "fields is require" }).end();
    }

    // const existingUser = await getUserByEmail(email);

    const user = await getUserByJwtToken(
      req.headers.authorization.split(" ")[1]
    );

    await createBank({
      iban,
      cardNumber,
      userId: user.id,
    });

    return res.status(200).end();
  } catch (error) {
    return res.status(400).json({ message: error.message }).end();
  }
};
