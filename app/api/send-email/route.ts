import { NextResponse } from "next/server";
import { sendConfirmationEmail } from "@/lib/send-confirmation";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    await sendConfirmationEmail(email);
    return NextResponse.json({ success: true });
  } catch (error) {
    let errorMessage = "An unknown error occurred";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
