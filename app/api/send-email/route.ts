import { NextResponse } from "next/server";
import { sendConfirmationEmail } from "@/lib/send-confirmation";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    await sendConfirmationEmail(email);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
