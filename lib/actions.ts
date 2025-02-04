"use server";

import { prisma } from "./db";

export const addUser = async (email: string) => {
    try {
        await prisma.user.create({
            data: {
                email: email,
            },
        });
    } catch (error: any) {
        console.log("Error adding user: ", error.message, "Error code: ", error.code);
        if(error.code == "P2002") {
            throw new Error("Email already subscribed.");
        } else {
            throw error;
        }
    }
};

export const getUsersCountAction = async () => {
    try {
        const count = await prisma.user.count();
        return count;
    } catch (error: any) {
        console.log("Error getting user count: ", error.message, "Error code: ", error.code);
    }
}