import { api } from "@/convex/_generated/api";
import { ConvexHttpClient } from "convex/browser";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

import client from "@/app/libs/convex/client";
import { checkAccount } from "@/app/libs/convex/account";
import { createUserBySosmed, findUser } from "@/app/libs/convex/user";
import { Id } from "@/convex/_generated/dataModel";
import {
  createUserFromSocialMedia,
  isUserExisting,
  updateOrCreateAccount,
} from "@/app/libs/auth/authUtils";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Invalid username or password");
        }

        const user = await client.query(api.users.getUser, {
          email: credentials.email,
        });

        if (!user || !user.password) {
          throw new Error("Email or password invalid");
        }

        const comparePassword = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!comparePassword) {
          throw new Error("Email or password invalid");
        }

        return user;
      },
    }),
  ],
  // secret: process.env.SECRET_AUTH,

  callbacks: {
    async signIn({ account, user, credentials, email, profile }) {
      if (account?.provider === "google" || account?.provider === "github") {
        if (!(await isUserExisting(user.email as string))) {
          await createUserFromSocialMedia(user);
        }

        const existingAccount = await checkAccount(user.email as string);

        await updateOrCreateAccount({ existingAccount, user, account });
      }
      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours
  },
};

const hendler = NextAuth(authOptions);

export { hendler as GET, hendler as POST };
