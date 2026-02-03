import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const sendEmail = {
      from: email,
      to: "kafebuk99@gmail.com",
      subject: subject,
      message: message,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/send`,
        sendEmail,
      );
      if (response.status === 200) {
        toast.success(
          `Hello ${subject}, your email has been sent successfully!`,
          { position: "bottom-right" },
        );
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        toast.error(`Something went wrong!`, { position: "bottom-right" });
      }
    } catch (error) {
      console.log(error);
      toast.error(`Email sending failed!`, { position: "bottom-right" });
    }
  };

  return (
    <section id="contact" className="site-section section-form text-center">
      <div className="container">
        <h3>Contact</h3>
        <img src="assets/img/lines.svg" className="img-lines" alt="lines" />

        {/* <!-- <p>Address: Frankfurt am Main</p> --> */}
        <p>Email: eftimov.alen@gmail.com</p>
        {/* <!-- <p>Phone: + 49 (0)174 623 15 25 </p> --> */}
        <p>Phone: + 381 (0)64 614 59 69 </p>

        <form
          action="contact-form-process.php"
          method="POST"
          enctype="text/plain"
          onSubmit={handleSubmit}
        >
          <div className="row">
            <div className="col-sm-6">
              <input
                type="text"
                name="name"
                value={subject}
                className="form-control mt-x-0"
                placeholder="Name"
                required
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="col-sm-6">
              <input
                type="email"
                name="email"
                value={email}
                className="form-control"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-sm-12">
              <textarea
                name="message"
                id="message"
                value={message}
                className="form-control"
                placeholder="Message"
                maxlength="500"
                required
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <button
            href="#"
            name="submit"
            className="btn btn-border"
            type="submit"
          >
            Hire Me <span className="glyphicon glyphicon-send"></span>
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
