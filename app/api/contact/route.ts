// app/api/contact/route.ts
// Nodemailer "me-to-me" email handler
// Visitor fills the form → email lands in anusreekottaram64@gmail.com

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // ── Basic validation ─────────────────────────────────────
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // ── Nodemailer transporter (Gmail App Password) ───────────
    // Generate an App Password at:
    // https://myaccount.google.com/apppasswords
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,      // your Gmail address
        pass: process.env.GMAIL_APP_PASS,  // 16-char App Password (not your real password)
      },
    });

    // ── HTML email template ───────────────────────────────────
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Portfolio Contact</title>
</head>
<body style="margin:0;padding:0;background:#0d0d0d;font-family:'Courier New',monospace;">
  <table width="100%" cellpadding="0" cellspacing="0"
         style="background:#0d0d0d;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0"
               style="background:#111111;border:1px solid #222222;max-width:600px;">

          <!-- Header -->
          <tr>
            <td style="background:#111111;border-bottom:2px solid #f5a623;
                       padding:28px 36px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-size:24px;font-weight:700;color:#ffffff;
                                 letter-spacing:-0.5px;">
                      AK<span style="color:#f5a623;">.</span>
                    </span>
                  </td>
                  <td align="right">
                    <span style="font-size:10px;color:#404040;
                                 letter-spacing:3px;text-transform:uppercase;">
                      Portfolio Contact
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 36px 24px;">
              <p style="margin:0 0 6px;font-size:10px;color:#f5a623;
                        letter-spacing:3px;text-transform:uppercase;">
                New Message Received
              </p>
              <h1 style="margin:0 0 28px;font-size:22px;color:#ffffff;
                         font-weight:700;line-height:1.3;">
                ${subject}
              </h1>

              <!-- Sender details -->
              <table width="100%" cellpadding="0" cellspacing="0"
                     style="background:#0d0d0d;border:1px solid #1e1e1e;
                            margin-bottom:28px;">
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #1e1e1e;">
                    <span style="font-size:10px;color:#505050;
                                 letter-spacing:2px;text-transform:uppercase;
                                 display:block;margin-bottom:4px;">From</span>
                    <span style="font-size:14px;color:#e0e0e0;">${name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 20px;">
                    <span style="font-size:10px;color:#505050;
                                 letter-spacing:2px;text-transform:uppercase;
                                 display:block;margin-bottom:4px;">Reply-to</span>
                    <a href="mailto:${email}"
                       style="font-size:14px;color:#f5a623;text-decoration:none;">
                      ${email}
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Message body -->
              <p style="margin:0 0 8px;font-size:10px;color:#505050;
                        letter-spacing:2px;text-transform:uppercase;">
                Message
              </p>
              <div style="background:#0d0d0d;border-left:3px solid #f5a623;
                          padding:20px 20px 20px 24px;margin-bottom:28px;">
                <p style="margin:0;font-size:14px;color:#a0a0a0;
                          line-height:1.8;white-space:pre-wrap;">${message}</p>
              </div>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#f5a623;">
                    <a href="mailto:${email}?subject=Re: ${subject}"
                       style="display:inline-block;padding:12px 28px;
                              font-size:11px;font-weight:700;color:#0d0d0d;
                              text-decoration:none;letter-spacing:2px;
                              text-transform:uppercase;">
                      Reply to ${name} →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 36px;border-top:1px solid #1a1a1a;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;font-size:10px;color:#303030;
                               letter-spacing:1px;">
                      Sent from your portfolio contact form · anusreekottaram.dev
                    </p>
                  </td>
                  <td align="right">
                    <p style="margin:0;font-size:10px;color:#303030;">
                      ${new Date().toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // ── Send me-to-me (FROM your Gmail TO your Gmail) ─────────
    await transporter.sendMail({
      from:     `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to:       process.env.GMAIL_USER,          // sends to yourself
      replyTo:  email,                           // reply goes back to visitor
      subject:  `[Portfolio] ${subject} — from ${name}`,
      html,
      // Plain-text fallback
      text: `New portfolio message\n\nFrom: ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact/route] Nodemailer error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}




