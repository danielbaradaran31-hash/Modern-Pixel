import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_musxqyi",
        "EuaY9zNOVPpjFxJaAm0WL",
        form.current,
        "Tbfel0iNA-dpsnPI3"
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 dark:text-white p-6">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Contact Me</h2>

        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="w-full p-3 border rounded"
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="w-full p-3 border rounded"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-3 border rounded h-32"
        />

        <button className="w-full bg-black text-white py-3 rounded hover:scale-105 transition dark:bg-white dark:text-black">
          Send Message
        </button>

        {sent && (
          <p className="text-green-600 text-center mt-3">
            Message sent successfully!
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;