import { getUserByEmail } from "../db/users";
import express from "express";
require("dotenv").config();
import jwt from "jsonwebtoken";

export const getUserByJwtToken = async (token: string) => {
  try {
    let decoded: any;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (e) {}
    var userEmail = decoded.email;
    const user = await getUserByEmail(userEmail);

    const templateRes = {
      id: user._id.toString(),
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      token: token,
    };

    return templateRes;
  } catch {}
};
