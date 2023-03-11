import express from "express";

require("dotenv").config();
import jwt from "jsonwebtoken";

export const isAuthenticated = async (
  req: any,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader) {
      const token = authHeader.split(" ")[1];

      jwt.verify(token, process.env.JWT_SECRET, (err: any, user: any) => {
        if (err) {
          return res.sendStatus(401);
        }

        req.user = user;

        next();
      });
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
