const nodemailer = require("nodemailer");

const sendEmail = (firstName, lastName, email, message) => {
  // create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "randall71@ethereal.email",
      pass: "2g1namCdme8GfeUwuq",
    },
  });
  //   set up the mail data
  const mailOptions = {
    from: "randall71@ethereal.email",
    to: "johann.de.la.cruz2023@gmail.com",
    subject: "New Contact Form Submission",
    text: `Name: ${firstName} + ${lastName}\nEmail: ${email}\nMessage: ${message}`,
  };
  //   send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent:", info.messageId);
    }
  });
};

// export the module

module.exports = sendEmail;
