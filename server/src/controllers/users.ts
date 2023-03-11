import express from "express";

import { deleteUserById, getUserById, getUsers } from "../db/users";

export const getAllUsers = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const users = await getUsers();

    return res.status(200).json(users).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    await deleteUserById(id);

    return res.status(200).end();
  } catch (error) {
    console.log(error);
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
    console.log(error);
    return res.sendStatus(400);
  }
};
