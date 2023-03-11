import mongoose from "mongoose";

// User Config
const BankSchema = new mongoose.Schema({
  cardNumber: {
    type: String,
    required: [true, "cardNumber is require"],
    unique: [true, "cardNumber is already exist"],
  },
  iban: {
    type: String,
    required: [true, "firstName is require"],
    unique: [true, "iban is already exist"],
  },
  status: { type: Number, default: 0, require: true },
  userId: {
    type: String,
    required: true,
  },
});

export const BankModel = mongoose.model("Bank", BankSchema);

// User Actions
export const getAllBanks = () => BankModel.find();
export const getBankByBankId = (id: string) => BankModel.findOne({ _id: id });

export const getUserBank = (userId: string) =>
  BankModel.find({ userId: userId });

export const createBank = (values: Record<string, any>) =>
  new BankModel(values).save().then((bank) => bank.toObject());

export const deleteBankById = (id: string) =>
  BankModel.findOneAndDelete({ _id: id });

export const updateBankStatus = (id: string, status: number) =>
  BankModel.findByIdAndUpdate(id, { status });
