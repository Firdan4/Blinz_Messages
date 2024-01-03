import client from "@/app/libs/convex/client";
import getSession from "./getSession";
import { api } from "@/convex/_generated/api";

const getCurrentUser = async () => {
  try {
    const session = await getSession();

    if (!session || !session.user?.email) {
      return null;
    }

    const currentUser = await client.query(api.users.getUser, {
      email: session.user.email,
    });

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error: any) {
    return null;
  }
};

export default getCurrentUser;
