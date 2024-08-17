import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import prisma from "./db";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [],
} satisfies NextAuthOptions;
