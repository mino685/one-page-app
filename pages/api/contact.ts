import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { name, email, message }: ContactFormData = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "Správa z formulára - NestFrame.com",
      text: message,
    });

    return res.status(200).json({ message: "Email bol úspešne odoslaný." });
  } catch (error) {
    console.error("Chyba pri odosielaní emailu:", error);
    return res.status(500).json({ message: "Nepodarilo sa odoslať email." });
  }
}
