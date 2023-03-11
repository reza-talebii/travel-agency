import mongoose from "mongoose";

// User Config
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is require"],
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})$/, "email is invalid"],
  },
  firstName: { type: String, required: [true, "firstName is require"] },
  address: { type: String, required: false },
  birthDate: { type: String, required: false },
  phoneNumber: { type: String, required: false },
  lastName: { type: String, required: [true, "lastName is require"] },
  password: {
    type: String,
    required: [true, "password is require"],
    select: false,
    minlegth: 6,
  },
  token: { type: String, select: false },
});

export const UserModel = mongoose.model("User", UserSchema);

// User Actions
export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
export const getUserByToken = (token: string) => UserModel.findOne({ token });
export const getUserById = (id: string) => UserModel.findById(id);
export const createUser = (values: Record<string, any>) =>
  new UserModel(values).save().then((user) => user.toObject());
export const deleteUserById = (id: string) =>
  UserModel.findOneAndDelete({ _id: id });
export const updateUserById = (id: string, values: Record<string, any>) =>
  UserModel.findByIdAndUpdate(id, values);
