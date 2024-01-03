import { api } from "@/convex/_generated/api";
import client from "./client";
import { findUser } from "./user";

export const checkAccount = async (email: string) => {
  const alreadyUsers = await findUser(email);

  if (alreadyUsers) {
    const account = await findAccount(alreadyUsers._id);
    return account;
  } else {
    return null;
  }
};

export const findAccount = async (id: string) => {
  const account = await client.query(api.account.getAccount, {
    userId: id,
  });

  return account;
};

export const createAccount = async () => {};
