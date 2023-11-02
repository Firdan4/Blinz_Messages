import { api } from "@/convex/_generated/api";
import { ConvexHttpClient } from "convex/browser";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import client from "@/app/libs/convex/client";

export const authOptions: AuthOptions = {
  providers: [
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
  secret: process.env.SECRET_AUTH,
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
};

const hendler = NextAuth(authOptions);

export { hendler as GET, hendler as POST };
