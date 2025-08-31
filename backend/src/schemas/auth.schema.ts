import z from "zod";

export const signUpSchema = z
  .object({
    username: z.string().min(1, "Enter a valid Username"),
    email: z.email().min(1, "Enter a valid Email"),
    password: z.string().min(8, "Password must contains 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const signInSchema = z.object({
  email: z.email().min(1, "Enter a valid Email"),
  password: z.string(),
});
