import React, { useState, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitting(true);

    emailjs.sendForm(
      "service_hpc9jn8",    // Your EmailJS service ID
      "template_4cdfmin",   // Your EmailJS template ID
      formRef.current,
      "hSuejZfutQakuoPgV"   // Your EmailJS public key
    ).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        setShowPopup(true);
        formRef.current.reset();
        setSubmitting(false);
      },
      (error) => {
        console.error("Email failed to send:", error.text);
        alert("Failed to send message. Please try again later.");
        setSubmitting(false);
      }
    );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Email</h4>
                  <a
                    href="mailto:sanathkumarsunny33@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    sanathkumarsunny33@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Phone</h4>
                  <a
                    href="tel:+919515437522"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9515437522
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/sanath-kumar-gampa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/sanathkumargampa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form ref={formRef} className="space-y-6" onSubmit={sendEmail}>
              <div>
                <label
                  htmlFor="from_name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="YOUR NAME"
                />
              </div>

              <div>
                <label
                  htmlFor="reply_to"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="reply_to"
                  name="reply_to"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="YOUR EMAIL"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="YOUR MESSAGE"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {submitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-background p-6 rounded-lg shadow-lg max-w-sm w-full text-center space-y-4">
            <p className="text-lg font-medium">
              Thank you for your message! I’ll get back to you soon.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
