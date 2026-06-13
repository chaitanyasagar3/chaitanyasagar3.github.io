require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors({ origin: process.env.CLIENT_ORIGIN || "https://chaitanyasagar3.github.io" }));
app.use(express.json());
app.use("/", router);
app.listen(3001, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

const escapeHtml = (str = "") =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

router.post("/contact/", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body || {};

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ code: 400, status: "Missing required fields" });
  }

  const name = `${escapeHtml(firstName)} ${escapeHtml(lastName)}`;
  const mail = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${escapeHtml(email)}</p>
           <p>Phone: ${escapeHtml(phone)}</p>
           <p>Message: ${escapeHtml(message)}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log(error);
      res.status(500).json({ code: 500, status: "Failed to send message" });
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
