import { api } from "@/convex/_generated/api";
import client from "./client";

interface createUserBySosmedProps {
  name: string;
  email: string;
  image: string;
}

export const findUser = async (email: string) => {
  const user = await client.query(api.users.getUser, {
    email,
  });

  return user;
};

export const createUserBySosmed = async ({
  name,
  email,
  image,
}: createUserBySosmedProps) => {
  await client.mutation(api.users.createBySosmed, {
    name,
    email,
    image,
  });
};
