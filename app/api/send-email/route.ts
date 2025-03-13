import { NextResponse } from "next/server";
import { Resend } from "resend";
import { PrismaClient } from "@prisma/client";

const resend = new Resend(process.env.RESEND_API_KEY);
const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (!existingUser) {
      await prisma.user.create({ data: { id: crypto.randomUUID(), email } });
    }

    // Send confirmation email
    await resend.emails.send({
      from: "team@drobb.in",
      to: email,
      subject: "Welcome to Drobb! 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Hey there, welcome to Drobb! 🎉</h2>
          <p>We’re super excited to have you on board. Stay tuned for some cool drops!</p>
          <p>Meanwhile, check us out on Instagram: <a href="https://www.instagram.com/swipedrobb/" target="_blank">@swipedrobb</a> 🚀</p>
          <p>Cheers,<br>Team Drobb</p>
        </div>`,
    });

    return NextResponse.json({ message: "Email saved & confirmation sent!" }, { status: 200 });
  } catch (error) {
    console.error("Failed to save email or send confirmation:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
