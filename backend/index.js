const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "Himanshuswami2810@gmail.com", // Your email
      pass: "ghvhdcxoazntakfn", // Your email password or app password
    },
  });

  const mailOptions = {
    from:"Himanshuswami2810@gmail.com" ,
    to: "Himanshuswami2810@gmail.com", // Replace with recipient's email
    subject: `Message from ${name}`,
    text: message,
    replyTo: email, 
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Failed to send email." });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
