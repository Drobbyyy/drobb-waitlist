"use server";

import { prisma } from "@/lib/db";
import { sendConfirmationEmail } from "@/lib/send-confirmation";

export const addUser = async (email: string) => {
  try {
    // Check if the email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return { success: false, message: "Email already subscribed." };
    }

    // Add user to database
    const newUser = await prisma.user.create({ data: { email } });

    // Attempt to send a confirmation email
    try {
      await sendConfirmationEmail(email);
    } catch (emailError) {
      console.warn("User added, but failed to send confirmation email:", emailError);
      return { success: true, message: "Subscribed, but confirmation email failed." };
    }

    return { success: true, message: "Successfully subscribed!" };

  } catch (error: any) {
    console.error("Error adding user:", error.message);
    return { success: false, message: "Something went wrong. Please try again." };
  }
};

export const getUsersCountAction = async () => {
  try {
    const count = await prisma.user.count();
    return count;
  } catch (error: any) {
    console.error("Error getting user count:", error.message);
    return 0;
  }
};
