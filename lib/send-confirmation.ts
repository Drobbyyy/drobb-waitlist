import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY); // 🔑 Secure API key from .env

export const sendConfirmationEmail = async (email: string) => {
  try {
    await resend.emails.send({
      from: "support@drobb.in", // 📩 Use your verified Resend email
      to: email,
      subject: "🎉 Welcome to Drobb! 🚀",
      html: `
        <h2>Hey there! 👋</h2>
        <p>🔥 Thanks for joining the waitlist for <strong>Drobb</strong>! 🛍️</p>
        <p>We’re building something <strong>super exciting</strong>—stay tuned! 🤩</p>
        <p>💰 Want to <strong>invest</strong> in us? Contact: <a href="mailto:poorv@drobb.in">poorv@drobb.in</a></p>
        <p>📸 Follow us on Instagram: <a href="https://www.instagram.com/swipedrobb/">@swipedrobb</a></p>
        <p>💼 Want to <strong>work with us</strong> or <strong>promote</strong> us on Insta? Email the same address! 🚀</p>
        <br/>
        <p>See you soon! 😎✨</p>
      `,
    });
    console.log("✅ Confirmation email sent successfully!");
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw new Error("Oops! Failed to send confirmation email. 😢");
  }
};
