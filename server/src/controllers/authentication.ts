import express from "express";

import { getUserByEmail, createUser } from "../db/users";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
require("dotenv").config();

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "faild is require" }).end();
    }
    const user = await getUserByEmail(email).select("+password");

    if (!user) {
      return res.status(400).json({ message: "user not found" }).end();
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
        expiresIn: "15m",
      });
      user.token = token;
      await user.save();
      const templateRes = {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        token,
      };
      return res.status(200).json(templateRes).end();
    } else {
      return res.status(400).json({ message: "password wrong" }).end();
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "try catch error" }).end();
  }
};

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);

    if ([email, password, firstName, lastName].some((body) => !body)) {
      return res.sendStatus(400);
    }

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return res.sendStatus(400);
    }

    const token = jwt.sign({ email: email }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });

    const user = await createUser({
      email,
      firstName,
      lastName,
      password: encryptedPassword,
    });

    const templateRes = {
      id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      token,
    };

    return res.status(200).json(templateRes).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
