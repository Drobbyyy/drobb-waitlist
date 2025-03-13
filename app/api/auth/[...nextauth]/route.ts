import { handlers } from "@/auth"; // Existing auth logic
import { Resend } from "resend";

export const { GET, POST } = handlers; // Keep your existing auth handlers

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendConfirmationEmail(email: string, name: string) {
  try {
    await resend.emails.send({
      from: "team@drobb.in",
      to: email,
      subject: "Welcome to Drobb! 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Hey ${name}, welcome to Drobb! 🎉</h2>
          <p>Drobb is here to make fashion fun. Discover personalized outfits that match your vibe with just a swipe.</p>
          <p>We’re super excited to have you on board. Stay tuned for some cool drops!</p>
          <p>If you're interested in investing in our startup, hit us up at <strong>poorv@drobb.in</strong> or call us.</p>
          <p>Wanna work with us or promote us on Instagram? Let’s talk! Drop an email at <strong>poorv@drobb.in</strong>.</p>
          <p>Meanwhile, check us out on Instagram: <a href="https://www.instagram.com/swipedrobb/" target="_blank">@swipedrobb</a> 🚀</p>
          <p>Cheers,<br>Team Drobb</p>
        </div>`,
    });
  } catch (error) {
    console.error("Failed to send confirmation email:", error);
  }
}
