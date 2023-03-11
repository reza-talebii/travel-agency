import express from "express";
require("dotenv").config();
import jwt from "jsonwebtoken";

import { deleteUserById, getUserByEmail, getUserById } from "../db/users";

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

export const getUser = async (req: express.Request, res: express.Response) => {
  try {
    if (req.headers && req.headers.authorization) {
      var authorization = req.headers.authorization.split(" ")[1];
      let decoded: any;
      try {
        decoded = jwt.verify(authorization, process.env.JWT_SECRET);
      } catch (e) {
        return res.status(401).send("unauthorized");
      }
      var userEmail = decoded.email;
      const user = await getUserByEmail(userEmail);

      const templateRes = {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        token: req.headers.authorization.split(" ")[1],
      };

      return res.status(200).send(templateRes);
    }
  } catch {
    return res
      .status(400)
      .send("An error occurred while processing the request");
  }
};
