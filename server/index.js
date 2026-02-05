const express = require('express');
const app = express()
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config()

const port = process.env.PORT || 4101;
const serverUrl = process.env.RENDER_EXTERNAL_URL || `http://localhost:${port}`;

app.use(cors())
//Middleware to parse incoming JSON requests
app.use(express.json())

app.get("/", (req, res) => {
  res.send("API is working");
});

app.post("/api/send", async (req, res) => {
    const { subject, message, from } = req.body;

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
            from: process.env.EMAIL_FROM_RESEND, 
            to: process.env.EMAIL_USER,
            reply_to: from,
            subject: subject,
            html: `
                <div>${message}</div>
                <br>
                <div><strong>This is message from:</strong> ${from}</div>
            `,
        });

        res.json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Resend ERROR:", error);
        res.status(500).json({ message: "An error has occurred" });
    }
});


app.listen(port, () => {
    console.log(`Server running on ${serverUrl}`)
})