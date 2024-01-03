import { AdapterUser } from "next-auth/adapters";
import { createUserBySosmed, findUser } from "../convex/user";
import { Account, User } from "next-auth";
import { Id } from "@/convex/_generated/dataModel";
import client from "../convex/client";
import { api } from "@/convex/_generated/api";

interface account {
  _id: Id<"account">;
  _creationTime: number;
  type: string;
  userId: string;
  id_token: string;
  provider: string;
  providerAccountId: string;
  access_token: string;
  expires_at: number;
  token_type: string;
  scope: string;
}

interface updateOrCreateAccountProps {
  existingAccount: account | null;
  user: User | AdapterUser;
  account: Account;
}

export async function isUserExisting(email: string) {
  const user = await findUser(email);

  return user;
}

export async function createUserFromSocialMedia({
  email,
  image,
  name,
}: User | AdapterUser) {
  await createUserBySosmed({
    name: name as string,
    image: image as string,
    email: email as string,
  });
}

export async function updateOrCreateAccount({
  existingAccount,
  user,
  account,
}: updateOrCreateAccountProps) {
  const cummonAccountProps = {
    id_token: account.id_token as string,
    type: account.type,
    provider: account.provider,
    providerAccountId: account.providerAccountId,
    access_token: account.access_token as string,
    expires_at: account.expires_at as number,
    token_type: account.token_type as string,
    scope: account.scope as string,
  };

  if (existingAccount) {
    await client.mutation(api.account.update, {
      _id: existingAccount._id,
      userId: existingAccount.userId,
      ...cummonAccountProps,
    });
  } else {
    const alreadyUsers = await isUserExisting(user.email as string);
    await client.mutation(api.account.create, {
      userId: alreadyUsers?._id as string,
      ...cummonAccountProps,
    });
  }
}
