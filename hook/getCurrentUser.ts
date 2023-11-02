import client from "@/app/libs/convex/client";
import getSession from "./getSession";
import { api } from "@/convex/_generated/api";

const getCurrentUser = async () => {
  const session = await getSession();

  if (!session || !session.user?.email) {
    throw new Error("Not authenticated!");
  }

  const currentUser = await client.query(api.users.getUser, {
    email: session.user.email,
  });

  if (!currentUser) {
    throw new Error("User session not found!");
  }

  return currentUser;
};

export default getCurrentUser;
