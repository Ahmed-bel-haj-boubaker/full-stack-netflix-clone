import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import EmailProvider from "next-auth/providers/email";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  debug: process.env.NODE_ENV === "development",
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),

    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT
          ? Number(process.env.EMAIL_SERVER_PORT)
          : undefined,
        secure: true,

        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
};

export default NextAuth(authOptions);
