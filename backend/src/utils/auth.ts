import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
import { emailOTP } from "better-auth/plugins";
import { resend } from "./resend";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    emailOTP({
      overrideDefaultEmailVerification: true,
      async sendVerificationOTP({ email, otp, type }) {
        let subject = "Your Verification OTP";
        if (type === "sign-in") subject = "Sign-in Verification Code";
        if (type === "email-verification")
          subject = "Verify Your Email Address";
        if (type === "forget-password") subject = "Password Reset Code";
        if (process.env.NODE_ENV === "development") {
          console.log("OTP for", email, "=>", otp);
        }

        await resend.emails.send({
          from: "Auth <noreply@mail.buildwithronit.xyz>",
          to: email,
          subject: subject,
          html: `<div style="font-family:sans-serif;font-size:16px;color:#333">
                    <p>Your one-time password (OTP) is:</p>
                    <h2 style="letter-spacing:3px">${otp}</h2>
                    <p>This code will expire in 10 minutes.</p>
                </div>`,
        });
      },
    }),
  ],
});
