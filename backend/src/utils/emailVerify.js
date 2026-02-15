import nodemailer from "nodemailer";
import { env } from "./env.js";
import logger from "./logger.js";

export const verifyEmail = (name, email, token) => {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: env.MAIL_USER,
      pass: env.MAIL_PASSWORD,
    },
  });

  const mailConfiguration = {
    from: env.MAIL_USER,
    to: email,
    subject: "Email verification from E-store",
    text: `Hello ${name},
        Thank you for registering with us. Please verify your email address by clicking the link below:
        ${env.FRONTEND_URL}/verify/${token}
        This link will expire in 15 minutes.
        If you did not create this account, please ignore this email.
        Best regards,

        Team E-store `,
  };
  mailTransporter.sendMail(mailConfiguration, function (err, data) {
    if (err) {
        logger.error(`Error in sending verification email: ${err.message}`);
        process.exit(1);
    } else {
        logger.info(`Verification email sent successfully`);
    }
  });
};
