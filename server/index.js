const express = require('express');
const app = express()
const cors = require('cors');
const nodemailer = require('nodemailer')
require('dotenv').config()

const port = process.env.PORT || 4101;
const serverUrl = process.env.RENDER_EXTERNAL_URL || `http://localhost:${port}`;

app.use(cors())
//Middleware to parse incoming JSON requests
app.use(express.json())

app.get("/", (req, res) => {
  res.send("API is working");
});

// app.post("/api/send", (req, res) => {
//     const { subject, message , from} = req.body;
//     const sendEmail = () => {
//         return new Promise((resolve, reject) => {
//                 const transporter = nodemailer.createTransport({
//                 service: "gmail",
//                 host: "smtp.gmail.com",
//                 port: 465,
//                 secure: true, 
//                 auth: {
//                     user: (process.env.EMAIL_USER),
//                     pass: (process.env.EMAIL_PASS)
//                 }
//             });      
//                 const mailOptions = {
//                     from: process.env.EMAIL_USER,
//                     to: "kafebuk99@gmail.com",
//                     subject: subject,
//                     html: `<div>${message}</div>  <div>This is message from: ${from}</div> `,
//                     replyTo: from 
//                 };
//                 transporter.sendMail(mailOptions, (error, info) => {
//                     if (error) {
//                         console.error("🚨 Nodemailer ERROR:", error);        // ← dodaj ovo
//                         console.error("Error code:", error.code);
//                         console.error("Response:", error.response);
//                       return res.status(500).json({ message: `An error has occured` });
//                     }
//                     return res.json({ message: "Email sent succesfuly" });              
//                 });
//         })
//     }
//     sendEmail()
//     .then((response) => res.send(response.message))
//     .catch((error) => res.status(500).send(error.message));
// });
app.post("/api/send", async(req, res) => {
    const { subject, message , from} = req.body;
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });     
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "kafebuk99@gmail.com",
            subject: subject,
            html: `<div>${message}</div>  <div>This is message from: ${from}</div> `,
            replyTo: from 
        };
        await transporter.sendMail(mailOptions)
        res.json({ message: "Email sent succesfuly" });              
          
    } catch (error) {
        console.error("Nodemailer ERROR:", error);       // ← dodaj ovo
        console.error("Error code:", error.code);
        console.error("Response:", error.response);
        res.status(500).json({ message: "An error has occurred" });
        
    }
});


app.listen(port, () => {
    console.log(`Server running on ${serverUrl}`)
})