import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
import { emailOTP } from "better-auth/plugins";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        if (type === 'sign-in') {
          // TODO: Setup Resend
        }
      },
    }),
  ],
});
